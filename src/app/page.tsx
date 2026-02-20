'use client';

import AboutSection from "@/components/mainModules/about/about";
import ContactSection from "@/components/mainModules/contact/contact";
import PortfolioSection from "@/components/mainModules/portfolio/portfolio";
import ProductsSection from "@/components/mainModules/products/products";
import { scrollToSection } from "@/lib/utils/smoothScroll";
import { Button, Slider } from "@mantine/core";
import { useState, useRef } from "react";
import React from "react";

const EntitiesPage: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);


  return (
    <>
      <div className="mainPageContainer">
        <section className="introSection">

          <div className="title">
            <h1>Forte Mirare</h1>
            <span className="subtitle">Mythos in Music</span>
          </div>  

          <div className="mainMenu">
            <nav className="card">
              <div className="leftNavbar">
                <Button onClick={() => scrollToSection('about')}>About</Button>
                <Button onClick={() => scrollToSection('portfolio')}>Portfolio</Button>
              </div>
              <div className="centerNavbar">

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

export default EntitiesPage;