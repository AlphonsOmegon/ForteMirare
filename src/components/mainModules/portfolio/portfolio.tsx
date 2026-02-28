import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { audioConfig } from "@/lib/audio/audioConfig";
import SongCard from "./songCard";
import { Accordion, Button, Slider } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { audioManager } from "@/lib/audio/audioManager";
import { LazyYouTube } from "@/components/youtubeComponent/LazyYoutube";

const PortfolioSection: React.FC = () => {

    const [volume, setVolume] = useState(80);
    const [visibleSections, setVisibleSections] = useState<string[]>(['section-0']);

    const handleVolumeChange = (value: number) => {
        setVolume(value);
        audioManager.setMusicVolume(value / 100);
    };

    const [videosPerSection, setVideosPerSection] = useState(3)

    useEffect(() => {
    const updateVideosPerSection = () => {
        const width = window.innerWidth
        if (width <= 576) setVideosPerSection(1)
        else if (width <= 1024) setVideosPerSection(2)
        else setVideosPerSection(3)
    }

    updateVideosPerSection()
    window.addEventListener("resize", updateVideosPerSection)
    return () => window.removeEventListener("resize", updateVideosPerSection)
    }, [])
    
    const videos = [
        "anl9I4Konvc",
        "Fa6TeOnjknY",
        "eZ2Y1Kh0UAc",
        "dAsVGmos9d0",
        "6o7KDHhqVVw",
        "g4Df5OhjWTI",
        "Q8SqWsUo3OA",
        "CnQ3e7gVAK4",
        "wJNvOXcPhBs",
        "bJVYHNumHnQ",
        "j74WXZxYBQ4",
        "IMqJ6iHUwa8",
        "t_VrXRuwJAA",
        "lnJl5Ej9zwA",
        "XOuQ9ThbDP0",
        "C5OUbu1huJM",
        "DXGMsVzGiII",
        "w0_f-Wu7Iw8",
        "7vD4ADu2gVE",
        "1Nfo-1gNQYE",
        "CHcnLAYS79A",
    ];

    const sections = [];
    for (let i = 0; i < videos.length; i += videosPerSection) {
        sections.push(videos.slice(i, i + videosPerSection));
    }

    const handleLoadMore = () => {
        const currentCount = visibleSections.length;
        if (currentCount < sections.length) {
            setVisibleSections([...visibleSections, `section-${currentCount}`]);
        }
    };

    const hasMoreToLoad = visibleSections.length < sections.length;
    
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
                    label={(val) => `${val}%`}
                    thumbLabel="Volume"
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={100}
                    step={1}
                    className="volumeRange"
                    style={{ flex: 1 }}
                />
                <FontAwesomeIcon className="volumeButton max icon" icon={faVolumeHigh} />
            </div>

            <div className="songCardWrapper">
                <SongCard songMetadata={audioConfig.music.breathOfDoomed}/>
                <SongCard songMetadata={audioConfig.music.quantumHermit}/>
                <SongCard songMetadata={audioConfig.music.laBahia}/>
                
            </div>

            <div className="youtubeContent contentCard">
                <div className="finalist">
                    <p className="finalistSubtitleContainer">
                        <span className="finalistSubtitle"><span className="highlight">Finalist</span> of Indie Game Music Contest - Autumn 2025</span>
                        <span className="citation">"A <span className="highlight">perfect focused concept</span> to support the impact of the narrative/gameplay/visual layer in <span className="highlight">the best possible way</span>"</span>
                    </p>
                    <div className="finalistYoutubeContainer">
                        <LazyYouTube videoId="Y4LSAIGERdc" className="finalistYoutube" />
                    </div>
                </div>

                <Accordion 
                    className="youtubeAccordion"
                    multiple 
                    value={visibleSections}
                    onChange={setVisibleSections}
                >
                    {sections.map((sectionVideos, sectionIndex) => (
                        <Accordion.Item 
                            key={`section-${sectionIndex}`} 
                            value={`section-${sectionIndex}`}
                        >
                            <Accordion.Control style={{ display: 'none' }} />
                            <Accordion.Panel>
                                <div className="youtubeGrid">
                                    {sectionVideos.map((video) => (
                                        <div key={video} className="cell">
                                            <div className="wrapper">
                                                <LazyYouTube videoId={video} className="youtubeFrame" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>

                {hasMoreToLoad && (
                    <Button aria-label="Load More Songs" className="loadMore" onClick={handleLoadMore}>
                        <FontAwesomeIcon icon={faAnglesDown} />
                    </Button>
                )}

            </div>
        </div>
    </section>
    );
};

export default PortfolioSection;