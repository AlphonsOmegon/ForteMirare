import React from "react";
import "./portfolio.scss";
import { audioConfig } from "@/lib/audio/audioConfig";
import SongCard from "./songCard";

const PortfolioSection: React.FC = () => {



return (
    <section id="portfolio" className="secondarySection portfolioSection">
        <div className="title">
            <h2>Portfolio</h2>
                <span className="subtitle">Thing that were, are and will be</span>
        </div>
        <div className="portfolio contentCard card">
            <SongCard songMetadata={audioConfig.music.collotrina}/>
            <SongCard songMetadata={audioConfig.music.theCoronation}/>
            <SongCard songMetadata={audioConfig.music.theSilvering}/>
        </div>
    </section>
    );
};

export default PortfolioSection;