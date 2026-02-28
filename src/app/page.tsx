'use client';

import Eye from "@/components/eye/eye";
import AboutSection from "@/components/mainModules/about/about";
import ContactSection from "@/components/mainModules/contact/contact";
import PortfolioSection from "@/components/mainModules/portfolio/portfolio";
import ProductsSection from "@/components/mainModules/products/products";
import { audioManager } from "@/lib/audio/audioManager";
import { scrollToSection } from "@/lib/utils/smoothScroll";
import { useStickyNavbar } from "@/lib/utils/stickyNavbar";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import React from "react";

const MainPage: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const { isSticky, navRef } = useStickyNavbar();

  useEffect(() => {
    audioManager.initialize();
  }, [])
  
  
  return (
    <>
      <div className="mainPageContainer">
        <section className="introSection">

          <div className="title">
            <h1>Forte&nbsp;Mirare</h1>
            <span className="subtitle">Mythos&nbsp;in&nbsp;Music</span>
          </div>  

          <div className="mainMenu">
            <nav ref={navRef} className={`card ${isSticky ? 'sticky' : ''}`}>
              <div className="leftNavbar">
                <Button onClick={() => scrollToSection('portfolio')}>Portfolio</Button>
                <Button onClick={() => scrollToSection('about')}>About me</Button>
              </div>
              <div className="centerNavbar">
                <Eye/>
                <img alt="Main Banner Eye" width="200" height="200" className="EyeImg" src={"/images/eyeEmpty.webp"} />
              </div>
              <div className="rightNavbar">
                <Button onClick={() => scrollToSection('products')}>Services</Button>
                <Button onClick={() => scrollToSection('contact')}>Contact</Button>
              </div>
            </nav>
          </div>

          <div className="introAnnotation">
            <p>
              <span className="highlight">Stories</span> are the lens through which we understand our <span className="highlight">universe</span>
            </p>
            <p>
              as deep as <span className="highlight">dreams</span>... as heavy as the <span className="highlight">mythology</span> of old...
            </p>
            <p>
              Music is the <span className="highlight">lifeblood</span> of immersion
            </p>
          </div>
        </section>

        <PortfolioSection/>

        <AboutSection/>

        <ProductsSection/>

        <ContactSection/>

        <footer className="card">
          <span>
            © {new Date().getFullYear() === 2026
              ? "2026"
              : `2026 - ${new Date().getFullYear()}`} Forte Mirare. All rights reserved.
          </span>
        </footer>
      </div>
    </>
  );
};

export default MainPage;