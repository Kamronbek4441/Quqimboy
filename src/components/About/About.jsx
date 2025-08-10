import React from "react";
import "./About.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = () => {
  return (
    <div class="container">
      <div class="top-section">
        <div class="image-box">
          <img src={about1} alt="Куры у кормушки" />
        </div>
        <div class="text-box">
          <p>
            “Ququmboy Naslchilik Parranda” MChJ — 1981 yilda tashkil topgan
            bo‘lib, parrandachilik sohasida 40 yildan ortiq tajribaga ega
            yetakchi kompaniyalardan biridir. Parrandachilik sohasida jadal
            rivojlanayotgan korxonamiz — "ROSS 308" yuqori mahsuldor naslini
            yetishtirish bo‘yicha yetakchilardan biridir. Bizning maqsadimiz —
            sifatli mahsulot va barqaror rivojlanish orqali bozor ehtiyojini
            to‘liq qondirish.
          </p>
          <p>
            Bizning faoliyatimiz Namangan viloyati, Kosonsoy tumani, Ququmboy
            qishlog‘ida joylashgan bo‘lib, hozirgi kunda 245 gektar umumiy
            hududda faoliyat yuritamiz. Shundan 35 gektar yer asosiy ishlab
            chiqarish maydoniga ajratilgan. Bizda 40,000 bosh naslli ona tovuq
            (родитель) boqiladi va har yili 800,000 bosh jo‘ja yetishtiriladi.
          </p>
        </div>
      </div>

      <div class="bottom-section">
        <div class="features-box">
          <h2>ROSS-308 naslning asosiy xususiyatlari:</h2>
          <ul>
            <li>✔ So'yish uchun mukammal shakl.</li>
            <li>✔ Kuchli tana vazni.</li>
            <li>✔ Barqaror va yuqori mahsuldorlik.</li>
            <li>✔ Yengil teri va jozibali tana go'shti ko'rinishi.</li>
            <li>✔ Naslni ko'paytirish qobiliyati, normal immunitet.</li>
          </ul>
        </div>
        <div class="image-box">
          <img src={about2} alt="Цыпленок в скорлупе" />
        </div>
      </div>
    </div>
  );
};

export default About;

// “Qo‘qimboy Parranda Naslchilik” MChJ — 1981 yilda tashkil topgan bo‘lib, parrandachilik sohasida 40 yildan ortiq tajribaga ega yetakchi kompaniyalardan biridir. Bizning faoliyatimiz Namangan viloyati, Kosonsoy tumani, Kukkumboy qishlog‘ida joylashgan bo‘lib, hozirgi kunda 245 gektar umumiy hududda faoliyat yuritamiz.

// Shundan 35 gektar yer asosiy ishlab chiqarish maydoniga ajratilgan. Bizda 40,000 bosh naslli ona tovuq boqiladi va har yili 800,000 bosh jo‘ja yetishtiriladi.

// Kompaniyamiz quyidagilar bilan ta’minlangan:

// 5 tonna yem ishlab chiqarish quvvatiga ega ozuqa tsexi.

// Kuniga 1000 bosh parranda so‘yish quvvatiga ega so‘yish tsexi.

// 1 martada 585 ming dona tuxum inkubatsiya qilish imkoniyati.

// Ustav fondimiz 67.8 milliard so‘mni tashkil etadi va moliyaviy faoliyatimiz “O‘zsanoatqurilishbank” ATB tomonidan qo‘llab-quvvatlanadi. Hozirda kompaniyada 57 nafar malakali mutaxassis ishlaydi va ishlab chiqarish jarayonlarining har bir bosqichi zamonaviy texnologiyalar asosida nazorat qilinadi.

// Menejment va Tashkiliy Ma’lumotlar
// Jamiyat raisi: D. Sadriddinov

// Asosiy ta’sischilar:

// OOO “Golden Egg of Namangan” — 51.4%

// Shamsiddinov Abdufattoh — 35.6%

// Abdurahmonov Hakim — 3.35%

// Bizning Afzalliklarimiz
// Tabiiy va ekologik toza mahsulotlar.

// To‘liq sanitariya va veterinariya nazorati ostida yetishtirilgan broiler tovuqlar.

// Katta hajmdagi buyurtmalarni qisqa muddatlarda bajarish imkoniyati.

// O‘z ozuqa tseximiz va inkubatsiya liniyalarimiz mavjudligi mahsulot sifatini kafolatlaydi.

// Yirik ishlab chiqarish maydoni (245 gektar) va zamonaviy uskunalar.
