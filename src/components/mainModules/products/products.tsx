import React from "react";

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="secondarySection productsSection">
      <div className="title">
        <h2>Products</h2>
        <span className="subtitle">buy buy buy</span>
      </div>
      <div className="products contentCard card"></div>
    </section>
  );
};

export default ProductsSection;