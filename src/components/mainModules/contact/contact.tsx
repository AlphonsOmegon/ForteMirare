import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contact.scss";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("fortemirare@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <section id="contact" className="secondarySection contactSection">
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="contactMenu">
        <div className="card">
          <a className="youtubeContact" href="https://www.youtube.com/@ForteMirare/featured" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
            <span>YouTube</span>
          </a>
          <div className="emailContact">
            <a href="mailto:fortemirare@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <span className={`copy ${showCopied ? 'copied' : ''}`} onClick={handleCopy}>fortemirare@gmail.com</span>
          </div>
          <a className="instagramContanct" href="https://www.instagram.com/forte_mirare/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      
      <span className="subtitle">... or sent a raven</span>
    </section>
  );
};

export default ContactSection;