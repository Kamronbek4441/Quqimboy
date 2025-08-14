import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Hero.css";

import tuxum from "../../assets/tuxum.svg";
import phoneIcon from "../../assets/telephone.png";
import juires from "../../assets/juires.svg";
import can from "../../assets/can.svg";
import file from "../../assets/file.svg";
import slide from "../../assets/slideimg.jpg";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import slide7 from "../../assets/slide7.jpg";
import slide10 from "../../assets/slide10.jpg";
import file10 from "../../assets/file10.png";

const images = [
  slide,
  slide2,
  slide4,
  slide1,
  slide3,
  slide7,
  slide10,
  slide5,
  file10,
];

function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="hero">
      {/* Slider */}
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img src={img} key={i} className="slide-img" alt={`slide-${i}`} />
          ))}
        </div>

        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Contact & About */}
      <div className="contact-top-section">
        <div className="top-contacts">
          <div className="phone">
            <img src={phoneIcon} alt="Phone" />
            <span>(+998 99) 695 00 20</span>
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="Phone" />
            <span>(+998 94) 156 56 56</span>
          </div>
        </div>

        <div className="content1">
          <div className="image-box1">
            <img src={tuxum} alt="" />
          </div>
          <div className="text-box1">
            <p>{t("hero.aboutText")}</p>
            <Link className="a" to="/About">
              {t("more")} →
            </Link>
          </div>
        </div>
      </div>

      {/* Chick Section */}
      <div
        className="chick-section2"
        style={{ backgroundImage: `url(${juires})` }}
      >
        <div className="text-box2">
          <p>{t("hero.chickText1")}</p>
          <p>{t("hero.chickText2")}</p>
          <button className="btn">
            <Link className="bt" to="/Products">
              {t("more")}
            </Link>
          </button>
        </div>

        <div className="image-box2">
          <img src={can} alt="Chitlen va tuxum" />
        </div>
      </div>

      {/* Products */}
      <div
        className="product-section"
        style={{
          backgroundImage: `url(${file})`,
          height: "600px",
        }}
      >
        <div className="product-item left">
          <h2>{t("hero.prod1Title")}</h2>
          <p>{t("hero.prod1Text")}</p>

          <h2>{t("hero.prod2Title")}</h2>
          <p>{t("hero.prod2Text")}</p>
        </div>

        <div className="product-item right">
          <h2>{t("hero.prod3Title")}</h2>
          <p>{t("hero.prod3Text")}</p>

          <h2>{t("hero.prod4Title")}</h2>
          <p>{t("hero.prod4Text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Hero.css";
// import tuxum from "../../assets/tuxum.svg";
// import phoneIcon from "../../assets/telephone.png";
// import juires from "../../assets/juires.svg";
// import can from "../../assets/can.svg";
// import file from "../../assets/file.svg"
// import slide from "../../assets/slide.jpg";
// import slide1 from "../../assets/slide1.jpg";
// import slide2 from "../../assets/slide2.jpg";
// import slide3 from "../../assets/slide3.jpg";
// import slide4 from "../../assets/slide4.jpg";
// import slide5 from "../../assets/slide5.jpg";
// import slide7 from "../../assets/slide7.jpg";
// import slide10 from "../../assets/slide10.jpg";
// import file10 from "../../assets/file10.png";

// const images = [
//   slide,
//   slide2,
//   slide4,
//   slide1,
//   slide3,
//   slide7,
//   slide10,
//   slide5,
//   file10
// ];

// function Hero() {

  
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="hero">
//       <div className="slider-wrapper">
//         <div
//           className="slider-track"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {images.map((img, i) => (
//             <img src={img} key={i} className="slide-img" alt={`slide-${i}`} />
//           ))}
//         </div>

//         <button className="nav-btn left" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="nav-btn right" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>

//       <div className="contact-top-section">
//         <div className="top-contacts">
//           <div className="phone">
//             <img src={phoneIcon} alt="Phone" />
//             <span>(+998 99) 695 00 20</span>
//           </div>
//           <div className="phone">
//             <img src={phoneIcon} alt="Phone" />
//             <span>(+998 94) 156 56 56</span>
//           </div>
//         </div>

//         <div className="content1">
//           <div className="image-box1">
//             <img src={tuxum} alt="" />
//           </div>
//           <div className="text-box1">
//             <p>
//               “Ququmboy Naslchilik Parranda” mas’uliyati cheklangan jamiyati
//               parrandachilik sohasida jadal rivojlanayotgan, zamonaviy
//               texnologiyalar asosida faoliyat yurituvchi yetakchi korxonalardan
//               biridir. Korxonada ROSS-308 nasllik tuxumlari va bir kunlik
//               jo‘jalari, gril uchun go'sht, yangi va muzlatilgan katta broyler
//               go‘shti xamda parrandachilik uchun sifatli ozuqa aralashmalari
//               ishlab chiqariladi. Har bir mahsulotimiz — sog‘lom, toza va sifat
//               kafolati ostida!
//             </p>
//             <Link className="a" to="/About">
//               Batafsil →
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div
//         className="chick-section2"
//         style={{
//           backgroundImage: `url(${juires})`,
//         }}
//       >
//         <div className="text-box2">
//           <p>
//             Tovuq yetishtirishning zamonaviy texnologiyalari doimiy ravishda
//             rivojlanmoqda. Ular jahon bozorini sifatli, nisbatan arzon va
//             sog‘lom mahsulotlar bilan to‘ldirishga mo‘ljallangan.
//           </p>
//           <p>
//             Bunda parranda go‘shtining mahsuldorligi bir kilogramm go‘sht
//             yetishtirish uchun iste’mol qilinadigan ozuqa nisbati sifatida
//             aniqlanadi. Shu nuqtai nazardan, broyler tovuqlari go'sht
//             yo'nalishida birinchi o'rinni mustahkam ushlab turadi.
//           </p>
//           <button className="btn">
//             <Link className="bt" to="/Products">
//               Batafsil
//             </Link>
//           </button>
//         </div>

//         <div className="image-box2">
//           <img src={can} alt="Chitlen va tuxum" />
//         </div>
//       </div>

//       <div
//       className="product-section"
//       style={{
//         backgroundImage: `url(${file})`,
//         height: "600px"
//       }}
//     >
//       <div className="product-item left">
//         <h2>Inkubatsiya tuxumi «ROSS-308»</h2>
//         <p>
//           "Ququmboy Naslchilik Parranda" MCHJ "ROSS-308" nasllik va yuqori
//               sifatli broyler inkubatsiya tuxumlarini yetkazib berishdan mamnun.
//         </p>

//         <h2>Kunlik broyler jo'jalar «ROSS-308»</h2>
//         <p>
//           Biz omon qolish qobiliyati (сохранность) va ozuqa konvertatsiyasi
//               yuqori bo'lgan bir kunlik broyler jo'jalarini sotamiz.
//         </p>
//       </div>

//       <div className="product-item right">
//         <h2>Yangi va muzlatilgan go'shtli broyler</h2>
//         <p>
//           Yangi va muzlatilgan broyler go‘shti yuqori “A” toifali sifatga
//               ega bo‘lib, 100 foiz mahalliy mahsulot hisoblanadi.
//         </p>

//         <h2>Parrandalar uchun aralash ozuqa</h2>
//         <p>
//           Yuqori sifatli, ekologik toza yem.
//               “Ququmboy Naslchilik Parranda”
//               MCHJ tomonidan ishlab chiqarilgan granullangan yemlar
//               jo'jalarni tez o'sishi, parrandalarning yuqori sifatda
//               oziqlanishini ta'minlaydi.
//         </p>
//       </div>
//     </div>

//       {/* <div
//         className="background-wrapper"
//         style={{
//           backgroundImage: `url(${file})`,
//         }}
//       >
//         <div className="info-container">
//           <div className="info-block">
//             <h2 className="info-title">Inkubatsiya tuxumi «ROSS-308»</h2>
//             <p className="info-text">
//               "Ququmboy Naslchilik Parranda" MCHJ "ROSS-308" nasllik va yuqori
//               sifatli broyler inkubatsiya tuxumlarini yetkazib berishdan mamnun.
//             </p>
//           </div>

//           <div className="info-block">
//             <h2 className="info-title">Kunlik broyler jo'jalar «ROSS-308»</h2>
//             <p className="info-text">
//               Biz omon qolish qobiliyati (сохранность) va ozuqa konvertatsiyasi
//               yuqori bo'lgan bir kunlik broyler jo'jalarini sotamiz.
//             </p>
//           </div>

//           <div className="info-block">
//             <h2 className="info-title">
//               Yangi va muzlatilgan go'shtli broyler
//             </h2>
//             <p className="info-text">
//               Yangi va muzlatilgan broyler go‘shti yuqori “A” toifali sifatga
//               ega bo‘lib, 100 foiz mahalliy mahsulot hisoblanadi.
//             </p>
//           </div>

//           <div className="info-block">
//             <h2 className="info-title">Parrandalar uchun aralash ozuqa</h2>
//             <p className="info-text">
//               Yuqori sifatli, ekologik toza yem.
//               “Ququmboy Naslchilik Parranda”
//               MCHJ tomonidan ishlab chiqarilgan granullangan yemlar
//               jo'jalarni tez o'sishi, parrandalarning yuqori sifatda
//               oziqlanishini ta'minlaydi.{" "}
//             </p>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default Hero;

// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Hero.css";
// // import tuxum from "../../assets/tuxum.svg";
// // import phoneIcon from "../../assets/telephone.png";
// // import juires from "../../assets/juires.svg";
// // import can from "../../assets/can.svg";
// // import file from "../../assets/file.svg";
// // import slide1 from "../../assets/slide1.jpg"
// // import slide2 from "../../assets/slide2.jpg"
// // import slide3 from "../../assets/slide3.jpg"
// // import slide4 from "../../assets/slide4.jpg"

// // const images = [
// //   "./src/assets/slide1.jpg",
// //   "./src/assets/slide2.jpg",
// //   "./src/assets/slide3.jpg",
// //   "./src/assets/slide4.jpg",
// // ];

// // function Hero() {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, [index]);

// //   const nextSlide = () => {
// //     setIndex((prev) => (prev + 1) % images.length);
// //   };

// //   const prevSlide = () => {
// //     setIndex((prev) => (prev - 1 + images.length) % images.length);
// //   };

// //   return (
// //     <div className="hero">
// //       <div className="slider-wrapper">
// //         <div
// //           className="slider-track"
// //           style={{ transform: `translateX(-${index * 100}%)` }}
// //         >
// //           {images.map((img, i) => (
// //             <img src={img} key={i} className="slide-img" alt={`slide-${i}`} />
// //           ))}
// //         </div>

// //         <button className="nav-btn left" onClick={prevSlide}>
// //           &#10094;
// //         </button>
// //         <button className="nav-btn right" onClick={nextSlide}>
// //           &#10095;
// //         </button>
// //       </div>

// //       <div className="contact-top-section">
// //         <div className="top-contacts">
// //           <div className="phone">
// //             <img src={phoneIcon} alt="Phone" />
// //             <span>(+998 99) 695 00 20</span>
// //           </div>
// //           <div className="phone">
// //             <img src={phoneIcon} alt="Phone" />
// //             <span>(+998 94) 156 56 56</span>
// //           </div>
// //         </div>

// //         <div className="content1">
// //           <div className="image-box1">
// //             <img src={tuxum} alt="" />
// //           </div>
// //           <div className="text-box1">
// //             <p>
// //               “Ququmboy Naslchilik Parranda” mas’uliyati cheklangan jamiyati
// //               parrandachilik sohasida jadal rivojlanayotgan korxona hisoblanadi.
// //               Korxonada ROSS-308 nasllik tuxumlari va bir kunlik
// //               jo‘jalari, yangi va muzlatilgan broyler go‘shti, parrandachilik
// //               uchun ozuqa aralashmalari ishlab chiqariladi.
// //             </p>
// //             <Link className="a" to="/About">
// //               Batafsil →
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       <div
// //         className="chick-section2"
// //         style={{
// //           backgroundImage: `url(${juires})`,
// //         }}
// //       >
// //         <div className="text-box2">
// //           <p>
// //             Tovuq yetishtirishning zamonaviy texnologiyalari doimiy ravishda
// //             rivojlanmoqda. Ular jahon bozorini sifatli, nisbatan arzon va
// //             sog‘lom mahsulotlar bilan to‘ldirishga mo‘ljallangan.
// //           </p>
// //           <p>
// //             Bunda parranda go‘shtining mahsuldorligi bir kilogramm go‘sht
// //             yetishtirish uchun iste’mol qilinadigan ozuqa nisbati sifatida
// //             aniqlanadi. Shu nuqtai nazardan, broyler tovuqlari go'sht
// //             yo'nalishida birinchi o'rinni mustahkam ushlab turadi.
// //           </p>
// //           <button className="btn">
// //             <Link className="bt" to="/Products">
// //               Batafsil
// //             </Link>
// //           </button>
// //         </div>

// //         <div className="image-box2">
// //           <img src={can} alt="Chitlen va tuxum" />
// //         </div>
// //       </div>

// //       <div
// //         className="background-wrapper"
// //         style={{
// //           backgroundImage: `url(${file})`,
// //         }}
// //       >
// //         <div className="info-container">
// //           <div className="info-block">
// //             <h2 className="info-title">Inkubatsiya tuxumi «ROSS-308»</h2>
// //             <p className="info-text">
// //               "Ququmboy Naslchilik Parranda" kompaniyasi "ROSS-308" nasllik
// //               yuqori sifatli broyler inkubatsiya tuxumlarini yetkazib berishdan
// //               mamnun.
// //             </p>
// //           </div>

// //           <div className="info-block">
// //             <h2 className="info-title">Kunlik Broiler Jo'jalar «ROSS-308»</h2>
// //             <p className="info-text">
// //               Biz omon qolish qobiliyati va ozuqa konvertatsiyasi yuqori bo'lgan
// //               bir kunlik broyler tovuqlarini sotamiz.
// //             </p>
// //           </div>

// //           <div className="info-block">
// //             <h2 className="info-title">
// //               Yangi va muzlatilgan go'shtli broyler
// //             </h2>
// //             <p className="info-text">
// //               Yangi va muzlatilgan broyler go‘shti yuqori “A” toifali sifatga
// //               ega bo‘lib, 100 foiz mahalliy mahsulot hisoblanadi.
// //             </p>
// //           </div>

// //           <div className="info-block">
// //             <h2 className="info-title">Parrandalar uchun aralash ozuqa</h2>
// //             <p className="info-text">
// //               Yuqori sifatli, ekologik toza yem. “Ququmboy Naslchilik Parranda” kompaniyasi
// //               tomonidan ishlab chiqarilgan granullangan yem ta'minlanadi tez
// //               o'sishi, parrandalarning yuqori o'sishi.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Hero;

// // // import React from "react";
// // // import "./Hero.css";
// // // import slide1 from "../../assets/slide.jpg"

// // // const Hero = () => {
// // //   let currentSlide = 0;
// // //   const slides = document.querySelectorAll(".slide");

// // //   function showSlide(index) {
// // //     slides.forEach((slide, i) => {
// // //       slide.classList.toggle("active", i === index);
// // //     });
// // //   }

// // //   setInterval(() => {
// // //     currentSlide = (currentSlide + 1) % slides.length;
// // //     showSlide(currentSlide);
// // //   }, 3000);

// // //   return (
// // //     <section className="hero">
// // //       <div class="slider">
// // //         <div class="slide active">
// // //           <img src={slide1} alt="Slide 1" />
// // //           <div class="slide-text">
// // //             <h2>Sifatli Broiler Go’shti</h2>
// // //             <p>Tabiiy va toza mahsulotlar</p>
// // //           </div>
// // //         </div>
// // //         <div class="slide">
// // //           <img src="images/slide2.jpg" alt="Slide 2" />
// // //           <div class="slide-text">
// // //             <h2>Tezkor yetkazib berish</h2>
// // //             <p>Buyurtmangizni 24 soatda yetkazamiz</p>
// // //           </div>
// // //         </div>
// // //         <div class="slide">
// // //           <img src="images/slide3.jpg" alt="Slide 3" />
// // //           <div class="slide-text">
// // //             <h2>100% Mahsulot kafolati</h2>
// // //             <p>Sifat nazorati ostida ishlab chiqarilgan</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;
