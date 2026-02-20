'use client';

import { audioConfig } from "./audioConfig";

interface ActiveMusic {
  source: AudioBufferSourceNode;
  gain: GainNode;
  id: string;
  startTime: number;
  pausedAt: number;
}

export class AudioManager {
  private static instance: AudioManager;
  
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  
  private musicBuffers: Map<string, AudioBuffer> = new Map();
  private currentMusic: ActiveMusic | null = null;
  private initialized = false;

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  async initialize() {
    if (this.initialized) return;
    
    this.context = new AudioContext();
    
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    
    this.musicGain = this.context.createGain();
    this.musicGain.connect(this.masterGain);
    
    await this.loadAudioFiles();
    
    this.initialized = true;
  }

  private async loadAudioFiles() {
    if (!this.context) {
      throw new Error('AudioManager not initialized');
    }

    const loadPromises: Promise<void>[] = [];

    for (const [name, path] of Object.entries(audioConfig.music)) {
      loadPromises.push(
        this.loadAudioFile(path).then(buffer => {
          this.musicBuffers.set(name, buffer);
        })
      );
    }

    await Promise.all(loadPromises);
  }

  private async loadAudioFile(path: string): Promise<AudioBuffer> {
    const response = await fetch(path);
    const arrayBuffer = await response.arrayBuffer();
    return await this.context!.decodeAudioData(arrayBuffer);
  }

  async resumeContext() {
    if (this.context?.state === 'suspended') {
      await this.context.resume();
    }
  }

  async playMusic(trackName: string, fadeTime: number = 2) {
    if (!this.context || !this.musicGain) return;
    
    await this.resumeContext();

    const buffer = this.musicBuffers.get(trackName);
    if (!buffer) {
      console.warn(`Music track "${trackName}" not found`);
      return;
    }

    if (this.currentMusic) {
      this.fadeOutAndStop(this.currentMusic, fadeTime);
    }

    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.loop = false;

    const gain = this.context.createGain();
    gain.gain.setValueAtTime(0, this.context.currentTime);
    
    source.connect(gain);
    gain.connect(this.musicGain);

    gain.gain.linearRampToValueAtTime(1, this.context.currentTime + fadeTime);

    source.start();

    this.currentMusic = {
      source,
      gain,
      id: trackName,
      startTime: this.context.currentTime,
      pausedAt: 0
    };
  }

  pauseMusic() {
    if (!this.currentMusic || !this.context) return;

    this.currentMusic.pausedAt = this.context.currentTime - this.currentMusic.startTime;
    this.currentMusic.source.stop();
  }

  resumeMusic() {
    if (!this.currentMusic || !this.context || !this.musicGain) return;
    if (this.currentMusic.pausedAt === 0) return;

    const buffer = this.musicBuffers.get(this.currentMusic.id);
    if (!buffer) return;

    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.loop = false;

    const gain = this.context.createGain();
    gain.gain.setValueAtTime(this.currentMusic.gain.gain.value, this.context.currentTime);
    
    source.connect(gain);
    gain.connect(this.musicGain);

    source.start(0, this.currentMusic.pausedAt);

    this.currentMusic.source = source;
    this.currentMusic.gain = gain;
    this.currentMusic.startTime = this.context.currentTime - this.currentMusic.pausedAt;
    this.currentMusic.pausedAt = 0;
  }

  stopMusic(fadeTime: number = 2) {
    if (this.currentMusic) {
      this.fadeOutAndStop(this.currentMusic, fadeTime);
      this.currentMusic = null;
    }
  }

  private fadeOutAndStop(activeMusic: ActiveMusic, fadeTime: number) {
    if (!this.context) return;

    const { source, gain } = activeMusic;
    const currentTime = this.context.currentTime;

    gain.gain.cancelScheduledValues(currentTime);
    gain.gain.setValueAtTime(gain.gain.value, currentTime);
    gain.gain.linearRampToValueAtTime(0, currentTime + fadeTime);

    setTimeout(() => {
      try {
        source.stop();
        source.disconnect();
        gain.disconnect();
      } catch (e) {
      }
    }, fadeTime * 1000 + 100);
  }

  getCurrentMusic(): string | null {
    return this.currentMusic?.id || null;
  }

  getMusicDuration(): number {
    if (!this.currentMusic) return 0;
    
    const buffer = this.musicBuffers.get(this.currentMusic.id);
    return buffer?.duration || 0;
  }

  getCurrentPosition(): number {
    if (!this.currentMusic || !this.context) return 0;
    
    if (this.currentMusic.pausedAt > 0) {
      return this.currentMusic.pausedAt;
    }
    
    return this.context.currentTime - this.currentMusic.startTime;
  }

  isPaused(): boolean {
    return this.currentMusic !== null && this.currentMusic.pausedAt > 0;
  }

  cleanup() {
    this.stopMusic(0);
    
    if (this.context) {
      this.context.close();
    }
    
    this.initialized = false;
  }

  setMasterVolume(volume: number) {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, volume));
    }
  }
   
  setMusicVolume(volume: number) {
    if (this.musicGain) {
      this.musicGain.gain.value = Math.max(0, Math.min(1, volume));
    }
  }

  getMasterVolume(): number {
    if (this.masterGain) {
      return this.masterGain.gain.value;
    }
    return 0;
  }

  getMusicVolume(): number {
    if (this.musicGain) {
      return this.musicGain.gain.value;
    }
    return 0;
  }
}

export const audioManager = AudioManager.getInstance();