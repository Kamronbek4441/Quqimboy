import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-container">
        <h1 className="contact-title">Biz bilan bog'laning</h1>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Manzil</h3>
            <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
            <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
          </div>
          <div className="contact-card">
            <h3>Telefon</h3>
            <a href="tel:+998905985114">+998 95 307 00 20</a>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:info@bizagro.uz">info@Qo'qimboyParranda.uz</a>
          </div>
        </div>

        <div className="form-section">
          <h2>Fikr-mulohaza yuboring</h2>
          <form>
            <input type="text" placeholder="Ismingiz" required />
            <input type="email" placeholder="Email manzilingiz" required />
            <textarea rows="5" placeholder="Xabaringiz" required></textarea>
            <button type="submit">Yuborish</button>
          </form>
        </div>
      </section>
    </div>
    //  <section className="contact-container">
    //   <h1 className="contact-title">Biz bilan bog'laning</h1>

    //   <div className="contact-grid">
    //     <div className="contact-card">
    //       <h3>Manzil</h3>
    //       <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
    //       <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
    //     </div>
    //     <div className="contact-card">
    //       <h3>Telefon</h3>
    //       <a href="tel:+998905985114">+998 90 598-51-14</a>
    //     </div>
    //     <div className="contact-card">
    //       <h3>Email</h3>
    //       <a href="mailto:info@bizagro.uz">info@bizagro.uz</a>
    //     </div>
    //   </div>

    //   <div className="form-section">
    //     <h2>Fikr-mulohaza yuboring</h2>
    //     <form>
    //       <input type="text" placeholder="Ismingiz" required />
    //       <input type="email" placeholder="Email manzilingiz" required />
    //       <textarea rows="5" placeholder="Xabaringiz" required></textarea>
    //       <button type="submit">Yuborish</button>
    //     </form>
    //   </div>
    // </section>
    // <section className="contact-container">
    //   <h1 className="contact-title">Biz bilan bog'laning</h1>

    //   <div className="contact-grid">
    //     <div className="contact-card">
    //       <h3>Manzil</h3>
    //       <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
    //       <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
    //     </div>
    //     <div className="contact-card">
    //       <h3>Telefon</h3>
    //       <a href="tel:+998781470500">+998 90 598-51-14</a>
    //     </div>
    //     <div className="contact-card">
    //       <h3>Email</h3>
    //       <a href="mailto:info@ifoda.uz">info@bizagro.uz</a>
    //     </div>
    //   </div>

    //   <div className="form-section">
    //     <h2>Fikr-mulohaza yuboring</h2>
    //     <form>
    //       <input type="text" placeholder="Ismingiz" required />
    //       <input type="email" placeholder="Email manzilingiz" required />
    //       <textarea rows="5" placeholder="Xabaringiz" required></textarea>
    //       <button type="submit">Yuborish</button>
    //     </form>
    //   </div>
    // </section>
    // <section className="contact-section">
    //   <div className="container">
    //     <h2>Biz bilan bog'laning</h2>
    //     <p>Savol va takliflaringizni yuborishingiz mumkin</p>
    //     <form className="contact-form">
    //       <input type="text" placeholder="Ismingiz" required />
    //       <input type="email" placeholder="Email manzilingiz" required />
    //       <textarea placeholder="Xabaringiz" required></textarea>
    //       <button type="submit">Yuborish</button>
    //     </form>
    //   </div>
    // </section>
    // <section id="contact" className="contact">
    //   <h2>Aloqa</h2>
    //   <p>Telefon: +998 90 123 45 67</p>
    //   <p>Telegram: @qoqimboy_parranda</p>
    // </section>
  );
};

export default Contact;
