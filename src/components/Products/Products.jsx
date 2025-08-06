import React from "react";
import "./Products.css";
import joja from "../../assets/chip.svg"
import back from "../../assets/Background.svg"
import chip from "../../assets/jojachip.svg"
import broiler from "../../assets/broiler.svg"
import border from "../../assets/Border.svg"
import yem from "../../assets/yem.svg"

const Products = () => {
  return (
    <section class="products-section">
      <div class="header">
        <img src={joja} alt="" />
      </div>

      <div className="back"  style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
        <div class="products-grid">
        <div class="product-card">
          <img src={chip} alt="Chicks in Eggs" />
        </div>
        <div class="product-card">
          <img src={border} alt="Chicks Group" />
        </div>
        <div class="product-card">
          <img src={broiler} alt="Broiler Meat" />
        </div>
        <div class="product-card">
          <img src={yem} alt="Feed Bags" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Products;
