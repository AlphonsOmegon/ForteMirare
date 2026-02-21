import React, { useEffect, useRef } from "react";
import { audioManager } from "@/lib/audio/audioManager";

interface WaveformProps {
    songId: string;
    width?: number;
    height?: number;
}

const Waveform: React.FC<WaveformProps> = ({ songId, width = 800, height = 200 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const drawWaveform = async () => {
            await audioManager.initialize();
            
            if (!canvasRef.current) return;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const buffer = (audioManager as any).musicBuffers?.get(songId);
            if (!buffer) {
                console.warn(`Song "${songId}" not found`);
                return;
            }

            const channelData = buffer.getChannelData(0);
            const step = Math.ceil(channelData.length / width);
            const amp = height / 2;

            ctx.fillStyle = '#00000000';
            ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = 'var(--color-primary)';
            ctx.lineWidth = 1;
            ctx.beginPath();

            for (let i = 0; i < width; i++) {
                const slice = channelData.slice(i * step, (i + 1) * step);
                let min = 1;
                let max = -1;
                
                for (let j = 0; j < slice.length; j++) {
                    const value = slice[j];
                    if (value < min) min = value;
                    if (value > max) max = value;
                }
                
                const yMin = (1 + min) * amp;
                const yMax = (1 + max) * amp;

                if (i === 0) {
                    ctx.moveTo(i, yMin);
                }
                
                ctx.lineTo(i, yMin);
                ctx.lineTo(i, yMax);
            }

            ctx.stroke();
        };

        drawWaveform();
    }, [songId, width, height]);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Waveform;