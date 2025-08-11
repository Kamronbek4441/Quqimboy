import React from "react";
import "./Hamkorlar.css";
import hamkor from "../../assets/hamkorlar1.png"

const Hamkorlar = ({partners}) => {
  const defaultPartners = [
    {
      name: "Hamkor 1",
      logo: "https://www.vdlagrotech.ru/_cache/_public/VDL-groep-logo_cl8weDEzMF9kXzFfcG5nXy9fdGhlbWUvdmRsL2ltYWdlcy9mcm9udGVuZA_369bebea.png",
      link: "https://www.vdlagrotech.ru/ru/home"
    },
    {
      name: "Hamkor 2",
      logo: "https://jamesway.com/storage/2022/12/Logo.png",
      link: "https://jamesway.com/"
    },
    {
      name: "Hamkor 3",
      logo: "https://www.bigdutchman.com/_assets/bbde817f050c3faeb4a562bc9e40d7d7/Images/Logo/bigdutchman-logo.svg",
      link: "https://www.bigdutchman.com/ru/startovaja-stranica/"
    },
    {
      name: "Hamkor 4",
      logo: "https://bigherdsman.com/wp-content/uploads/2024/12/logo.webp",
      link: "https://bigherdsman.com/ru/"
    },
    // {
    //   name: "Hamkor 5",
    //   logo: "https://via.placeholder.com/160x80?text=Logo+5",
    // },
    // {
    //   name: "Hamkor 6",
    //   logo: "https://via.placeholder.com/160x80?text=Logo+6",
    // },
  ];

  const list = partners && partners.length ? partners : defaultPartners;
  return (
    <section className="partners-section" style={{
      backgroundImage: `url(${hamkor})`,
      height: "525px"
    }}>
      <div className="partners-header">
        <div>
          <h1>Hamkorlar</h1>
          <p>Biz bilan hamkorlik qilayotgan kompaniyalar</p>
        </div>
      </div>

      <div className="partners-grid">
        {list.map((p, i) => (
          <div key={i} className="partner-card">
            <img src={p.logo} alt={p.name} />
          </div>
        ))}
      </div>


    </section>
  );
};

export default Hamkorlar;
