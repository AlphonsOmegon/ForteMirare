// src/lib/audio/AudioManager.ts
'use client';

export class AudioManager {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  
  private beatSource: AudioBufferSourceNode | null = null;
  private vitalSources: AudioBufferSourceNode[] = [];
  
  private beatBuffer: AudioBuffer | null = null;
  private vitalBuffer: AudioBuffer | null = null;
  private clickBuffer: AudioBuffer | null = null;
  
  private vitalFilter: BiquadFilterNode | null = null;
  
  async initialize() {
    this.context = new AudioContext();
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    
    this.vitalFilter = this.context.createBiquadFilter();
    this.vitalFilter.type = 'lowpass';
    this.vitalFilter.frequency.value = 20000;
    this.vitalFilter.connect(this.masterGain);
    
    await this.loadAudioFiles();
  }
  
  private async loadAudioFiles() {
    const [beat, vital, click] = await Promise.all([
      fetch('/audio/mainTheme/Beat.wav').then(r => r.arrayBuffer()),
      fetch('/audio/mainTheme/Vital.wav').then(r => r.arrayBuffer()),
      fetch('/audio/mainTheme/Click.wav').then(r => r.arrayBuffer()),
    ]);
    
    this.beatBuffer = await this.context!.decodeAudioData(beat);
    this.vitalBuffer = await this.context!.decodeAudioData(vital);
    this.clickBuffer = await this.context!.decodeAudioData(click);
  }
  
  startBeat() {
    if (!this.context || !this.beatBuffer) return;
    
    this.beatSource = this.context.createBufferSource();
    this.beatSource.buffer = this.beatBuffer;
    this.beatSource.loop = true;
    this.beatSource.connect(this.masterGain!);
    this.beatSource.start();
  }
  
  startVital() {
    if (!this.context || !this.vitalBuffer) return;
    
    const vitalSource = this.context.createBufferSource();
    vitalSource.buffer = this.vitalBuffer;
    vitalSource.loop = true;
    vitalSource.connect(this.vitalFilter!);
    vitalSource.start();
    
    this.vitalSources.push(vitalSource);
  }
  
  playVitalOnce() {
    if (!this.context || !this.vitalBuffer) return;
    
    const vitalSource = this.context.createBufferSource();
    vitalSource.buffer = this.vitalBuffer;
    vitalSource.connect(this.vitalFilter!);
    vitalSource.start();
    
    vitalSource.onended = () => {
      const index = this.vitalSources.indexOf(vitalSource);
      if (index > -1) this.vitalSources.splice(index, 1);
    };
    
    this.vitalSources.push(vitalSource);
  }
  
  playClick() {
    if (!this.context || !this.clickBuffer) return;
    
    const clickSource = this.context.createBufferSource();
    clickSource.buffer = this.clickBuffer;
    clickSource.connect(this.masterGain!);
    clickSource.start();
  }
  
  setVitalFilter(frequency: number) {
    if (this.vitalFilter) {
      this.vitalFilter.frequency.setTargetAtTime(
        frequency,
        this.context!.currentTime,
        0.1
      );
    }
  }
  
  setMasterVolume(volume: number) {
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(
        volume,
        this.context!.currentTime,
        0.1
      );
    }
  }
  
  stop() {
    this.beatSource?.stop();
    this.vitalSources.forEach(source => source.stop());
    this.vitalSources = [];
  }
}