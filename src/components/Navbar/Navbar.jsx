import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav class="navbar">
        <div class="logo">
          <div class="logo-circle">
            <span>QNP</span>
          </div>
          <div class="logo-text">
            <span>Ququmboy <br /> Naslchilik <br /> Parranda</span>
          </div>
        </div>
        <ul class="nav-links">
          <li>
              <Link className="n1" to="/">Bosh Sahifa</Link>
          </li>
          <li>
            <Link className="n2" to="/Products">Mahsulotlar</Link>
          </li>
          <li>
            <Link className="n3" to="/About">Biz Haqimizda</Link>
          </li>
          <li>
            <Link className="n4" to="/Order">Buyurtma</Link>
          </li>
          <li>
            <Link className="n5" to="/Contact">Aloqa</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
