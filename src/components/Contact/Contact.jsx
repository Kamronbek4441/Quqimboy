import React, { useState } from "react";
import "./Contact.css";
import tuxum from "../../assets/Background.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = '7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA';
    const chatId = '5764570183';
    const text = `
📝 Yangi xabar:
👤 Ism: ${formData.name}
📧 Email: ${formData.email}
💬 Xabar: ${formData.message}
    `;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    }).then(() => {
      alert('Xabaringiz yuborildi!');
      setFormData({name: '', email: '', message: ''});
    }).catch((err) => {
      console.error('Xatolik:', err);
      alert('Xabar yuborilmadi!');
    });
  };

  return (
    <div className="contact" style={{
       backgroundImage: `url(${tuxum})`,
       backgroundPosition: "center",
       backgroundSize: "cover"
      //  height: "880px"
       }}>
      <section className="contact-container">
        <h1 className="contact-title">Biz bilan bog'laning</h1>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Manzil</h3>
            <p>Namangan viloyati, Kosonsoy tumani</p>
            <p>Ququmboy qishlog'i Buston M.F.Y</p>
          </div>
          <div className="contact-card">
            <h3>Telefon</h3>
            <a href="tel:+998953070020">+998 95 307 00 20</a><br />
            <a href="tel:+998941565656">+998 94 156 56 56</a>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:info@Qo'qimboyParranda.uz">info@QuqumboyParranda.uz</a>
          </div>
        </div>

        <div className="form-section">
          <h2>Fikr-mulohaza yuboring</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ismingiz" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email manzilingiz" required />
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Xabaringiz" required></textarea>
            <button type="submit">Yuborish</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;


// import React from "react";
// import "./Contact.css";
// import tuxum from "../../assets/slide1.jpg"

// const Contact = () => {
//   return (
//     <div className="contact" style={{
//         backgroundImage: `url(${tuxum})`
//       }}>
//       <section className="contact-container">
//         <h1 className="contact-title">Biz bilan bog'laning</h1>

//         <div className="contact-grid">
//           <div className="contact-card">
//             <h3>Manzil</h3>
//             <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
//             <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
//           </div>
//           <div className="contact-card">
//             <h3>Telefon</h3>
//             <a href="tel:+998905985114">+998 95 307 00 20</a>
//           </div>
//           <div className="contact-card">
//             <h3>Email</h3>
//             <a href="mailto:info@bizagro.uz">info@Qo'qimboyParranda.uz</a>
//           </div>
//         </div>

//         <div className="form-section">
//           <h2>Fikr-mulohaza yuboring</h2>
//           <form>
//             <input type="text" placeholder="Ismingiz" required />
//             <input type="email" placeholder="Email manzilingiz" required />
//             <textarea rows="5" placeholder="Xabaringiz" required></textarea>
//             <button type="submit">Yuborish</button>
//           </form>
//         </div>
//       </section>
//     </div>
//     //  <section className="contact-container">
//     //   <h1 className="contact-title">Biz bilan bog'laning</h1>

//     //   <div className="contact-grid">
//     //     <div className="contact-card">
//     //       <h3>Manzil</h3>
//     //       <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
//     //       <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
//     //     </div>
//     //     <div className="contact-card">
//     //       <h3>Telefon</h3>
//     //       <a href="tel:+998905985114">+998 90 598-51-14</a>
//     //     </div>
//     //     <div className="contact-card">
//     //       <h3>Email</h3>
//     //       <a href="mailto:info@bizagro.uz">info@bizagro.uz</a>
//     //     </div>
//     //   </div>

//     //   <div className="form-section">
//     //     <h2>Fikr-mulohaza yuboring</h2>
//     //     <form>
//     //       <input type="text" placeholder="Ismingiz" required />
//     //       <input type="email" placeholder="Email manzilingiz" required />
//     //       <textarea rows="5" placeholder="Xabaringiz" required></textarea>
//     //       <button type="submit">Yuborish</button>
//     //     </form>
//     //   </div>
//     // </section>
//     // <section className="contact-container">
//     //   <h1 className="contact-title">Biz bilan bog'laning</h1>

//     //   <div className="contact-grid">
//     //     <div className="contact-card">
//     //       <h3>Manzil</h3>
//     //       <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
//     //       <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
//     //     </div>
//     //     <div className="contact-card">
//     //       <h3>Telefon</h3>
//     //       <a href="tel:+998781470500">+998 90 598-51-14</a>
//     //     </div>
//     //     <div className="contact-card">
//     //       <h3>Email</h3>
//     //       <a href="mailto:info@ifoda.uz">info@bizagro.uz</a>
//     //     </div>
//     //   </div>

//     //   <div className="form-section">
//     //     <h2>Fikr-mulohaza yuboring</h2>
//     //     <form>
//     //       <input type="text" placeholder="Ismingiz" required />
//     //       <input type="email" placeholder="Email manzilingiz" required />
//     //       <textarea rows="5" placeholder="Xabaringiz" required></textarea>
//     //       <button type="submit">Yuborish</button>
//     //     </form>
//     //   </div>
//     // </section>
//     // <section className="contact-section">
//     //   <div className="container">
//     //     <h2>Biz bilan bog'laning</h2>
//     //     <p>Savol va takliflaringizni yuborishingiz mumkin</p>
//     //     <form className="contact-form">
//     //       <input type="text" placeholder="Ismingiz" required />
//     //       <input type="email" placeholder="Email manzilingiz" required />
//     //       <textarea placeholder="Xabaringiz" required></textarea>
//     //       <button type="submit">Yuborish</button>
//     //     </form>
//     //   </div>
//     // </section>
//     // <section id="contact" className="contact">
//     //   <h2>Aloqa</h2>
//     //   <p>Telefon: +998 90 123 45 67</p>
//     //   <p>Telegram: @qoqimboy_parranda</p>
//     // </section>
//   );
// };

// export default Contact;
