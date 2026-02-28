import React from "react";
import "./products.scss";

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="secondarySection productsSection">
      <div className="title">
        <h2>Services</h2>
        <span className="subtitle">working towards beauty</span>
      </div>
      <div className="products contentCard">
          <div className="upperText">
            <h3>
              Game Composer & Original Music for Projects
            </h3>
            <p>
              Original music crafted to enhance experiences and stories — from games to interactive art. Music is designed to belong to the world it lives in, supporting gameplay and narrative with purpose.
            </p>
          </div>

          <div className="lowerText">
            <div className="column">
              <h3>
                Hire for Custom Soundtrack Production
              </h3>
              <p>
                Collaborate to create a unique musical identity for your project, whether it’s a full interactive game soundtrack or a set of key thematic pieces. Each composition is tailored to your project’s tone, story, and emotional arc.
              </p>
            </div>
            <div className="column">
              <h3>
                Orchestral, Electronic & Ambient Game Music
              </h3>
              <p>
                Cinematic orchestral writing, subtle ambient textures, modern electronic elements — or a hybrid of all three. The style adapts to your project while preserving a distinctive authorial voice.
              </p>
            </div>
            <div className="column">
              <h3>
                Game Music Production Process & Delivery
              </h3>
              <p>
                Every project begins with a conversation about tone and scope, followed by sketches, refinement, production, and final delivery. You receive high-quality mixes, loopable tracks, and stems ready for integration.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProductsSection;