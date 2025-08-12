import React, { useEffect } from "react";
import "./Hamkorlar.css";
import hamkor from "../../assets/hamkorlar1.png";
import big from "../../assets/big.svg"
import jamesway from "../../assets/jamesway.png"

const Hamkorlar = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".partner-card").forEach((card) => {
        card.addEventListener("click", () => {
          const img = card.querySelector("img");
          img.style.transform = "scale(1.4)";
          setTimeout(() => {
            img.style.transform = "scale(1)";
          }, 500);
        });
      });
    }
  }, []);

  return (
    <section className="partners-section" style={{
      background: `url(${hamkor})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px"
    }}>
      <div className="overlay">
        <h1 className="title">Hamkorlar</h1>
        <p className="subtitle">Biz bilan hamkorlik qilayotgan kompaniyalar</p>
        <div className="partners">
          <div className="partner-card">
            <a href="https://www.vdlagrotech.ru/ru/home">
              <img className="img"
              src="https://www.vdlagrotech.ru/_cache/_public/VDL-groep-logo_cl8weDEzMF9kXzFfcG5nXy9fdGhlbWUvdmRsL2ltYWdlcy9mcm9udGVuZA_369bebea.png"
              alt="VDL"
            />
            </a>
          </div>
          <div className="partner-card">
            <a href="https://jamesway.com/">
              <img className="img"
              src={jamesway}
              alt="Jamesway"
            />
            </a>
          </div>
          <div className="partner-card">
            <a href="https://www.bigdutchman.com/ru/startovaja-stranica/">
              <img className="img"
              src={big}
              alt="Big Dutchman"
            />
            </a>
          </div>
          <div className="partner-card">
            <a href="https://bigherdsman.com/ru/">
              <img className="img"
              src="https://bigherdsman.com/wp-content/uploads/2024/12/logo.webp"
              alt="Big Herdsman"
            />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hamkorlar;
