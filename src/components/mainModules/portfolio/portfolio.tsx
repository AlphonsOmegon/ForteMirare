import React, { useState } from "react";
import "./portfolio.scss";
import { audioConfig } from "@/lib/audio/audioConfig";
import SongCard from "./songCard";
import { ActionIcon, Slider } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faVolume, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { audioManager } from "@/lib/audio/audioManager";

const PortfolioSection: React.FC = () => {

    const [volume, setVolume] = useState(100);

    const handleVolumeChange = (value: number) => {
        setVolume(value);
        audioManager.setMusicVolume(value / 100);
    };
    
    return (
    <section id="portfolio" className="secondarySection portfolioSection">
        <div className="title">
            <h2>Portfolio</h2>
                <span className="subtitle">Thing that were, are and will be</span>
        </div>
        <div className="portfolio contentCard card">
            
            <div className="volumeControl">
                <FontAwesomeIcon className="volumeButton min icon" icon={faVolumeXmark} />
                <Slider
                    className="volumeRange"
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={100}
                    step={1}
                    style={{ flex: 1 }}
                />
                <FontAwesomeIcon className="volumeButton max icon" icon={faVolumeHigh} />
            </div>

            <SongCard songMetadata={audioConfig.music.collotrina}/>
            <SongCard songMetadata={audioConfig.music.theCoronation}/>
            <SongCard songMetadata={audioConfig.music.theSilvering}/>
        </div>
    </section>
    );
};

export default PortfolioSection;