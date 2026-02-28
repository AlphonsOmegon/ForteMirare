import React from "react";
import "./products.scss";

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="secondarySection productsSection">
      <div className="title">
        <h2>Services</h2>
        <span className="subtitle">working towards beauty</span>
      </div>
      <div className="products contentCard card">
        <div className="">
          Professional composition and technical collaboration for games and artistic projects.
        </div>

        <div className="">
          Clear scope, transparent communication, and reliable delivery.
        </div>

        <div className="">
          Custom music tailored to your project’s tone, world, and emotional goals.
        </div>

        <div className="">
          Available in orchestral, electronic, or heavily processed ambient styles, depending on your project’s direction.
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;