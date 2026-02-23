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
    
    const videos = [
        "Fa6TeOnjknY",
        "eZ2Y1Kh0UAc",
        "dAsVGmos9d0",
        "6o7KDHhqVVw",
        "CnQ3e7gVAK4",
        "wJNvOXcPhBs",
        "bJVYHNumHnQ",
        "j74WXZxYBQ4",
        "IMqJ6iHUwa8",
        "t_VrXRuwJAA",
        "0SBXPNXTuuo",
        "lnJl5Ej9zwA",
        "XOuQ9ThbDP0",
        "C5OUbu1huJM",
        "DXGMsVzGiII",
        "TnEIjz6TTaE",
        "w0_f-Wu7Iw8",
        "leepAh0hpSA",
        "7vD4ADu2gVE",
        "1Nfo-1gNQYE",
        "CHcnLAYS79A",
    ]
    
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

        <div className="youtubeContent contentCard card">
            <div className="youtubeGrid">
                {videos.map((video) => (
                    <div className="cell">
                        <div className="wrapper">
                            <iframe key={video}
                            className="youtubeFrame" width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video}?controls=1&modestbranding=1&rel=0&playsinline=1`}title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </section>
    );
};

export default PortfolioSection;