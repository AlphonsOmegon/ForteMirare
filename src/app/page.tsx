'use client';

import AudioPage from "@/components/AudioPage/AudioPage";
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
                <Button>About</Button>
                <Button>Portfolio</Button>
              </div>
              <div className="centerNavbar">

              </div>
              <div className="rightNavbar">
                <Button>Products</Button>
                <Button>Contact</Button>
              </div>
            </nav>
          </div>

          <div className="introAnnotation">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
            </p>
          </div>
        </section>
        <section id="portfolio" className="secondarySection portfolioSection">
          <div className="title">
            <h2>
              Portfolio
            </h2>
            <span className="subtitle">Thing that were, are and will be</span>
          </div>
          <div className="portfolio contentCard card">

          </div>
        </section>
        <section id="about" className="secondarySection aboutSection">
          <div className="title">
            <h2>
              About me
            </h2>
            <span className="subtitle">Czech composer, coder, wizard, doing stuff</span>
          </div>
          <div className="aboutMe contentCard card">

          </div>
        </section>
        <section id="products" className="secondarySection productsSection">
          <div className="title">
            <h2>
              Products
            </h2>
            <span className="subtitle">buy buy buy</span>
          </div>
          <div className="products contentCard card">

          </div>
        </section>
        <section id="contact" className="secondarySection contactSection">
          <div className="title">
            <h2>
              Contact
            </h2>
            <span className="subtitle">... or sent a raven</span>
          </div>
          <div className="contact contentCard card">

          </div>
        </section>

      </div>
    </>
  );
};

export default EntitiesPage;