import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="secondarySection aboutSection">
      <div className="title">
        <h2>About me</h2>
        <span className="subtitle">Czech composer, coder, wizard, doing stuff</span>
      </div>
      <div className="aboutMe contentCard card"></div>
    </section>
  );
};

export default AboutSection;