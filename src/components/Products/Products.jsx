import React from "react";
import "./Products.css";
import joja from "../../assets/chip.svg";
import back from "../../assets/Background.svg";
import chip from "../../assets/jojachip.svg";
import broiler from "../../assets/broiler.svg";
import border from "../../assets/Border.svg";
import yem from "../../assets/yem.svg";

const Products = () => {
  return (
    <div>
      <div className="front">
        <img src={joja} className="img" alt="" />
      </div>
      <div
        className="background"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="content-grid">
          <div className="image-box">
            <img src={chip} alt="Chick Hatching" />
          </div>
          <div className="image-box">
            <img src={border} alt="Many Chicks" />
          </div>
          <div className="image-box">
            <img src={broiler} alt="Raw Chicken" />
          </div>
          <div className="image-box">
            <img src={yem} alt="Feed Bags" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
