import { audioConfig, SongMetadata } from "@/lib/audio/audioConfig";
import { ActionIcon } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { audioManager } from "@/lib/audio/audioManager";

interface SongCardProps {
    songMetadata : SongMetadata,
}

const SongCard: React.FC<SongCardProps> = ({songMetadata}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        audioManager.initialize();

        const updateState = () => {
            const currentMusic = audioManager.getCurrentMusic();
            const isPaused = audioManager.isPaused();
            const isThisSongPlaying = currentMusic === songMetadata.id && !isPaused;
            
            setIsPlaying(isThisSongPlaying);
            setDuration(audioManager.getSongDuration(songMetadata.id));
            
            if (currentMusic !== songMetadata.id) {
                setPosition(0);
            }
        };

        updateState();

        const unsubscribe = audioManager.subscribe(updateState);
        return unsubscribe;
    }, [songMetadata.id]);

    useEffect(() => {
        const currentMusic = audioManager.getCurrentMusic();
        
        if (currentMusic !== songMetadata.id) {
            setPosition(0);
            return;
        }

        if (!isPlaying) {
            setPosition(audioManager.getSongPosition(songMetadata.id));
            return;
        }

        let animationFrameId: number;

        const updatePosition = () => {
            setPosition(audioManager.getSongPosition(songMetadata.id));
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        animationFrameId = requestAnimationFrame(updatePosition);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPlaying, songMetadata.id]);

    const handlePlayPause = () => {
        const currentMusic = audioManager.getCurrentMusic();
        const isPaused = audioManager.isPaused();
        
        if (currentMusic === songMetadata.id && !isPaused) {
            audioManager.pauseMusic();
        } else if (currentMusic === songMetadata.id && isPaused) {
            audioManager.resumeMusic();
        } else {
            audioManager.playMusic(songMetadata.id);
        }
    };

    const indicatorRef = React.useRef<HTMLDivElement>(null);    
    const handlePlayerClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!indicatorRef.current) return;
        
        const rect = indicatorRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickPosition = Math.max(0, Math.min(1, clickX / rect.width));
        
        audioManager.playMusic(songMetadata.id, clickPosition);
    };

    return (
        <div className={"songCard " + (isPlaying && position < duration  ? "active" : "")}>
            <h3 className="songTitle">{songMetadata.name}</h3>
            <p className="songSubtitle">{songMetadata.subtitle}</p>

            <div className="songImg">
                <img width={124} className="thumbnail" src={`/songs/${songMetadata.id}/${songMetadata.id}.webp`} alt={`Thumbnail for song: ${songMetadata.name}`} />
                <img width={192} className="imgFrame" src="/images/frame.webp" alt=""/>
            </div>

            <div className="keywords">
                {songMetadata.keywords.map((keyword, index) => (
                    <span key={index}>{keyword}{index < songMetadata.keywords.length - 1 ? ', ' : ''}</span>
                ))}
            </div>

            <div className="player">
                <div className="playerClickable"  onClick={handlePlayerClick}>
                    <div className="playerIndicator" ref={indicatorRef}>
                        <div className="progressBar" style={{ width: `${duration > 0 ? Math.min(100,(position / duration) * 100) : 0}%` }}></div>
                        <div className={"startPoint " + `${position > 0 ? "active" : ""}`}>
                            <span>
                                {
                                (() => {
                                    const clampedPosition = Math.min(position, duration);
                                    const m = Math.floor(position / 60);
                                    const s = Math.floor(position % 60);
                                    return `${m}:${s.toString().padStart(2, '0')}`;
                                })()
                                }
                            </span>
                        </div>
                        <div className={"endPoint"}>
                            <span>
                            {
                            (() => {
                                const m = Math.floor(duration / 60);
                                const s = Math.floor(duration % 60);
                                return `${m}:${s.toString().padStart(2, '0')}`;
                            })()
                            }
                            </span>
                        </div>
                    </div>
                </div>

                <ActionIcon aria-label="Play" className="playerButton" size="lg" variant="filled" onClick={handlePlayPause}>
                    <FontAwesomeIcon className="icon" icon={isPlaying ? faPause : faPlay} />
                </ActionIcon>
            </div>
        </div>
    );
};

export default SongCard;