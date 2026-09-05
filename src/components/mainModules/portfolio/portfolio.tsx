import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { audioConfig } from "@/lib/audio/audioConfig";
import SongCard from "./songCard";
import { Accordion, Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faArrowUpRightFromSquare, faHourglassHalf, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
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

    const featuredProductTrackList = [
        {
            title: "8 Story Themes",
            tracks: ["Fairytale Begins", "Main Menu Loop", "Call to Adventure (with Inner Loop)", "Dramatic Moment", "Melancholy", "Heroism", "Creeping Danger", "Calm Credits"],
        },
        {
            title: "6 Adaptive Exploration Themes",
            note: "Each includes a full mix plus separate action, and percussion layers where applicable.",
            tracks: ["Casual", "Playful", "Melancholic", "Desolation", "Arcane", "Corruption"],
        },
        {
            title: "2 Multi-Phase Boss Themes",
            note: "Designed for dynamic encounters with intros, phases, and outros.",
            tracks: ["Struggle and Triumph", "Facing Corruption"],
        },
        {
            title: "9 Short Themes & Cues",
            tracks: ["Choir Hit", "Main Motif", "Melancholy Motif", "Corruption Motif", "Arcane Motif", "Creeping Danger Motif", "Intro Motif", "Piano Main Motif", "Three Note"],
        },
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

            <div className="featuredProduct">
                <div className="featuredProductTop">
                    <div className="featuredProductVideoContainer">
                        <div className="wrapper">
                            <LazyYouTube videoId="DSJ-GqilCLo" className="youtubeFrame" />
                        </div>
                    </div>

                    <div className="featuredProductIntro">
                        <h3 className="featuredProductTitle">Fairytale Music Pack - <span className="highlight">Aulur</span></h3>

                        <span className="featuredProductLinksTitle">Buy pack at</span>
                        <div className="featuredProductLinks">
                            <a className="productLink" href="https://assetstore.unity.com/packages/slug/394554" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                <span>Unity Asset Store</span>
                            </a>
                            <a className="productLink" href="https://www.gamedevmarket.net/asset/fairytale-music-pack-aulur" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                <span>GameDevMarket</span>
                            </a>
                            <span className="productLink pending">
                                <FontAwesomeIcon icon={faHourglassHalf} />
                                <span>FAB (pending review)</span>
                            </span>
                        </div>

                        <span className="featuredProductLinksTitle">Resources</span>
                        <div className="featuredProductLinks">
                            <a className="productLink" href="/resources/AulurManual.pdf" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFilePdf} />
                                <span>Manual</span>
                            </a>
                            <a className="productLink" href="https://youtu.be/Tw-y8MpDVDk" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                                <span>Preview</span>
                            </a>

                            <a className="productLink" href="https://soundcloud.com/forte-mirare/sets/aulur" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSoundcloud} />
                                <span>Soundcloud Playlist Album</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="featuredProductBody">
                    <p className="featuredProductText">
                        A full orchestral adaptive soundtrack for emotional fantasy adventures.
                        <span className="featuredProductInspiredBy">Inspired by: Ori and the Blind Forest, Hollow Knight</span>
                    </p>

                    <ul className="featuredProductFeatures">
                        <li>50+ minutes of original music</li>
                        <li>73 WAV files built from 25 musical themes</li>
                        <li>Full orchestral score</li>
                        <li>Live soprano vocalist</li>
                        <li>Seamless loops</li>
                        <li>Adaptive music layers</li>
                    </ul>
                </div>

                <Accordion className="featuredProductContents" multiple>
                    {featuredProductTrackList.map((section, index) => (
                        <Accordion.Item key={section.title} value={`content-${index}`}>
                            <Accordion.Control>{section.title}</Accordion.Control>
                            <Accordion.Panel>
                                {section.note && <p className="sectionNote">{section.note}</p>}
                                <ul>
                                    {section.tracks.map((track) => (
                                        <li key={track}>{track}</li>
                                    ))}
                                </ul>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            
            <div className="songCardWrapper">
                <SongCard songMetadata={audioConfig.music.breathOfDoomed} volume={volume} onVolumeChange={handleVolumeChange}/>
                <SongCard songMetadata={audioConfig.music.quantumHermit} volume={volume} onVolumeChange={handleVolumeChange}/>
                <SongCard songMetadata={audioConfig.music.laBahia} volume={volume} onVolumeChange={handleVolumeChange}/>
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