'use client';

import AboutSection from "@/components/mainModules/about/about";
import ContactSection from "@/components/mainModules/contact/contact";
import PortfolioSection from "@/components/mainModules/portfolio/portfolio";
import ProductsSection from "@/components/mainModules/products/products";
import { scrollToSection } from "@/lib/utils/smoothScroll";
import { useStickyNavbar } from "@/lib/utils/stickyNavbar";
import { Button } from "@mantine/core";
import { useState } from "react";
import React from "react";

const MainPage: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const { isSticky, navRef } = useStickyNavbar();

  return (
    <>
      <div className="mainPageContainer">
        <section className="introSection">

          <div className="title">
            <h1>Forte Mirare</h1>
            <span className="subtitle">Mythos in Music</span>
          </div>  

          <div className="mainMenu">
            <nav ref={navRef} className={`card ${isSticky ? 'sticky' : ''}`}>
              <div className="leftNavbar">
                <Button onClick={() => scrollToSection('portfolio')}>Portfolio</Button>
                <Button onClick={() => scrollToSection('about')}>About me</Button>
              </div>
              <div className="centerNavbar">
                <img src={"/images/eye.webp"} />
              </div>
              <div className="rightNavbar">
                <Button onClick={() => scrollToSection('products')}>Products</Button>
                <Button onClick={() => scrollToSection('contact')}>Contact</Button>
              </div>
            </nav>
          </div>

          <div className="introAnnotation">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
            </p>
          </div>
        </section>

        <PortfolioSection/>

        <AboutSection/>

        <ProductsSection/>

        <ContactSection/>

      </div>
    </>
  );
};

export default MainPage;