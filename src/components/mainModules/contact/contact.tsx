import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="secondarySection contactSection">
      <div className="title">
        <h2>Contact</h2>
        <span className="subtitle">... or sent a raven</span>
      </div>
      <div className="contact contentCard card"></div>
    </section>
  );
};

export default ContactSection;