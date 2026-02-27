import React from "react";
import "./about.scss";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="secondarySection aboutSection">
      <div className="title">
        <h2>About me</h2>
        <span className="subtitle">Czech composer, coder, wizard, doing stuff</span>
      </div>
      <div className="aboutMe contentCard">
        <div className="innerContent">
          <div className="leftColumn">
            <p>
                I am a professional coder and composer. Music for me, is a&nbsp;pinnacle of&nbsp;psychological arts - for it can speak to our psyche without words.
            </p>
            <p>
                My songs are ambient stories of... transformation... of&nbsp;<span className="highlight">the Hero’s Journey</span>
            </p>
            <p>
                But ultimately, true beauty is hidden in <span className="highlight">collaboration</span>, which is why I aim to use my music to enhance larger works and&nbsp;experiences.
            </p>
            <p>
                I can help your game (or other project) achieve immersion, emotional depth, and&nbsp;<span className="highlight">mythic gravitas</span>.
            </p>
          </div>

          <div className="centerColumn">
            <img src="/images/face.webp" alt="Forte Mirare Profile Image" />
          </div>

          <div className="rightColumn">
              <p>As a&nbsp;coder, I have rich experience working with clients who are experts in their own fields but unfamiliar with my craft.</p>

              <p>They often know what they want but are unsure of the steps required.</p>

              <p>One of my primary focuses in any project is clear communication, aimed at achieving a&nbsp;<span className="highlight">shared vision</span> - something we can all be proud of.</p>

              <p>I also never hesitate to offer constructive pushback when it’s needed to keep both the project and myself true to&nbsp;<span className="highlight">higher principles.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;