'use client';

import { audioManager } from '@/lib/audio/audioManager';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface AudioPageProps {
  play?: boolean;
}

const AudioPage: React.FC<AudioPageProps> = ({ play }) => {
  const initialized = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!play || initialized.current || false) return;
    
    audioManager.initialize().then(() => {
      initialized.current = true;
      audioManager.playMusic('mainTheme');
      setIsPlaying(true);
    });
    
    return () => {
      if (initialized.current) {
        audioManager.cleanup();
        initialized.current = false;
      }
    };
  }, [play]);
  
  const handlePause = () => {
    audioManager.pauseMusic();
    setIsPaused(true);
  };
  
  const handleResume = () => {
    audioManager.resumeMusic();
    setIsPaused(false);
  };
  
  const handleStop = () => {
    audioManager.stopMusic();
    setIsPlaying(false);
    setIsPaused(false);
  };
  
  return null;
};

export default AudioPage;