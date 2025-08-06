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
    <div className="products">
      <div className="prod1" style={{
        backgroundImage: `url(${joja})`,
        width: "400px",
      }}>
        <h1>Bizning Mahsulotlarimiz</h1>      
      </div>
      <div className="prod2" style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain"
      }}>
        <div className="pro">
          <img src={chip} alt="" />
        </div>
        <div className="pro">
          <img src={border} alt="" />
        </div>
        <div className="pro">
          <img src={broiler} alt="" />
        </div>
        <div className="pro">
          <img src={yem} alt="" />
        </div>
      </div>
    </div>    
  );
};

export default Products;
