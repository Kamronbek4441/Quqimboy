import React, { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "./src/assets/slide1.jpg",
  "./src/assets/slide2.jpg",
  "./src/assets/slide3.jpg",
  "./src/assets/slide4.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero">
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
    </div>
  );
}

export default Hero;

// import React from "react";
// import "./Hero.css";
// import slide1 from "../../assets/slide.jpg"

// const Hero = () => {
//   let currentSlide = 0;
//   const slides = document.querySelectorAll(".slide");

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.toggle("active", i === index);
//     });
//   }

//   setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   }, 3000);

//   return (
//     <section className="hero">
//       <div class="slider">
//         <div class="slide active">
//           <img src={slide1} alt="Slide 1" />
//           <div class="slide-text">
//             <h2>Sifatli Broiler Go’shti</h2>
//             <p>Tabiiy va toza mahsulotlar</p>
//           </div>
//         </div>
//         <div class="slide">
//           <img src="images/slide2.jpg" alt="Slide 2" />
//           <div class="slide-text">
//             <h2>Tezkor yetkazib berish</h2>
//             <p>Buyurtmangizni 24 soatda yetkazamiz</p>
//           </div>
//         </div>
//         <div class="slide">
//           <img src="images/slide3.jpg" alt="Slide 3" />
//           <div class="slide-text">
//             <h2>100% Mahsulot kafolati</h2>
//             <p>Sifat nazorati ostida ishlab chiqarilgan</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
