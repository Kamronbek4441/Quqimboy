import React from "react";
import "./Products.css";
import joja from "../../assets/chip.svg";
import back from "../../assets/Background.svg";
import chip from "../../assets/jojachip.svg";
import broiler from "../../assets/broiler.svg";
import border from "../../assets/Border.svg";
import yem from "../../assets/yem.png";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();

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
            <img src={chip} alt={t("imgAlt1")} />
          </div>
          <div className="image-box">
            <img src={border} alt={t("imgAlt2")} />
          </div>
          <div className="image-box">
            <img src={broiler} alt={t("imgAlt3")} />
          </div>
          <div className="image-box">
            <img src={yem} alt={t("imgAlt4")} />
          </div>
        </div>

        <div className="features-box1">
          <h3>💡 {t("whyUsTitle")}</h3>
          <ul>
            <li>✔ {t("whyUs1")}</li>
            <li>✔ {t("whyUs2")}</li>
            <li>✔ {t("whyUs3")}</li>
            <li>✔ {t("whyUs4")}</li>
            <li>📍 {t("whyUs5")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;


// import React from "react";
// import "./Products.css";
// import joja from "../../assets/chip.svg";
// import back from "../../assets/Background.svg";
// import chip from "../../assets/jojachip.svg";
// import broiler from "../../assets/broiler.svg";
// import border from "../../assets/Border.svg";
// import yem from "../../assets/yem.png";


// const Products = () => {
//   return (
//     <div>
//       <div className="front">
//         <img src={joja} className="img" alt="" />
//       </div>
//       <div
//         className="background"
//         style={{
//           backgroundImage: `url(${back})`,
//         }}
//       >
//         <div className="content-grid">
//           <div className="image-box">
//             <img src={chip} alt="Chick Hatching" />
//           </div>
//           <div className="image-box">
//             <img src={border} alt="Many Chicks" />
//           </div>
//           <div className="image-box">
//             <img src={broiler} alt="Raw Chicken" />
//           </div>
//           <div className="image-box">
//             <img src={yem} alt="Feed Bags" />
//           </div>
//         </div>
//         <div class="features-box1">
//           <h3>💡 Nega aynan biz?</h3>
//           <ul>
//             <li>✔ Zamonaviy texnologiyalar asosida ishlab chiqarish.</li>
//             <li>✔ Yevropa standartlariga mos sifat nazorati.</li>
//             <li>✔ Har bir mahsulot — tabiiy va xavfsiz.</li>
//             <li>✔ ENG ASOSIYSI HALOL MAHSULOTLAR.</li>
//             <li>
//             📍 "Ququmboy Naslchilik Parranda" MCHJ — Sizning sifatli parranda
//               mahsulotlari bo‘yicha ishonchli hamkoringiz!
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
