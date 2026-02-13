'use client';

import { useEffect, useRef, useState } from 'react';
import { AudioManager } from '@/lib/audio/AudioManager';
import { Button, Slider, Stack, Text } from '@mantine/core';

export default function AudioPage() {
  const audioManager = useRef<AudioManager | null>(null);
  const [filterValue, setFilterValue] = useState(20000);
  
  useEffect(() => {
    audioManager.current = new AudioManager();
    audioManager.current.initialize().then(() => {
      audioManager.current!.startBeat();
      audioManager.current!.startVital();
    });
    
    return () => audioManager.current?.stop();
  }, []);
  
  return (
    <Stack p="xl">
      <Button onClick={() => audioManager.current?.playClick()}>
        Play Click
      </Button>
      
      <Stack gap="xs" maw={400}>
        <Text>Filter Vital ({filterValue}Hz)</Text>
        <Slider
          min={20}
          max={20000}
          value={filterValue}
          onChange={(value) => {
            setFilterValue(value);
            audioManager.current?.setVitalFilter(value);
          }}
        />
      </Stack>
    </Stack>
  );
}