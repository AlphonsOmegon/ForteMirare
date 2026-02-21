import { audioConfig, SongMetadata } from "@/lib/audio/audioConfig";
import { ActionIcon } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { audioManager } from "@/lib/audio/audioManager";
import Waveform from "./waveform";

interface SongCardProps {
    songMetadata : SongMetadata,
}

const SongCard: React.FC<SongCardProps> = ({songMetadata}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        const currentMusic = audioManager.getCurrentMusic();
        const isPaused = audioManager.isPaused();
        
        if (currentMusic === songMetadata.id && !isPaused) {
            audioManager.pauseMusic();
            setIsPlaying(false);
        } else if (currentMusic === songMetadata.id && isPaused) {
            audioManager.resumeMusic();
            setIsPlaying(true);
        } else {
            audioManager.playMusic(songMetadata.id);
            setIsPlaying(true);
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

            {
                /*
                <p className="description">
                    {songMetadata.description}
                </p>
                */
            }


            <div className="player">
                <Waveform songId={songMetadata.id}/>
                <ActionIcon className="playerButton" size="lg" variant="filled" onClick={handlePlayPause}>
                    <FontAwesomeIcon className="icon" icon={isPlaying ? faPause : faPlay} />
                </ActionIcon>
            </div>
        </div>
    );
};

export default SongCard;