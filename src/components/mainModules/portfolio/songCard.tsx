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

    useEffect(() => {
        audioManager.initialize();

        const updateState = () => {
            const currentMusic = audioManager.getCurrentMusic();
            const isPaused = audioManager.isPaused();
            setIsPlaying(currentMusic === songMetadata.id && !isPaused);
            setDuration(audioManager.getSongDuration(songMetadata.id));
        };

        updateState();

        const unsubscribe = audioManager.subscribe(updateState);
        return unsubscribe;
    }, [songMetadata.id]);

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

    return (
        <div className="songCard">
            <p className="songTitle">{songMetadata.name}</p>
            <p className="songSubtitle">{songMetadata.subtitle}</p>

            <div className="songImg">
                <img src="/songs/Collotrina/Collotrina.webp" alt="songThumbnail" />
            </div>

            <div className="keywords">
                {songMetadata.keywords.map((keyword, index) => (
                    <span key={index}>{keyword}{index < songMetadata.keywords.length - 1 ? ', ' : ''}</span>
                ))}
            </div>

            <div className="player">
                <div className="playerIndicator">
                    <div className="startPoint">
                        <span>0:00</span>
                    </div>
                    <div className="endPoint">
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

                <ActionIcon className="playerButton" size="lg" variant="filled" onClick={handlePlayPause}>
                    <FontAwesomeIcon className="icon" icon={isPlaying ? faPause : faPlay} />
                </ActionIcon>
            </div>
        </div>
    );
};

export default SongCard;