import React, { useState } from "react";
import "./Order.css";
import back from "../../assets/Background.svg";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
📥 Yangi Buyurtma
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
🛒 Mahsulot: ${formData.product}
📝 Izoh: ${formData.comment}
    `;

    const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
    const chatId = "5764570183";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    alert("Buyurtma yuborildi!");
    setFormData({ name: "", phone: "", product: "", comment: "" });
  };

  return (
    <div
      className="div"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "800px"
      }}
    >
      <section id="order" className="order-section">
        <h2 className="order-title">Buyurtma berish</h2>
        <form className="order-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon raqamingiz"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Mahsulotni tanlang</option>
            <option value="Jo'ja go'shti">Jo'ja go'shti</option>
            <option value="Tovuq go'shti">Tovuq go'shti</option>
            <option value="Tuxum">Tuxum</option>
          </select>
          <textarea
            name="comment"
            placeholder="Qo'shimcha izoh"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Buyurtma berish</button>
        </form>
      </section>
    </div>
  );
};

export default Order;


// import React from "react";
// import "./Order.css";
// import back from "../../assets/Background.svg";

// const Order = () => {
//   return (
//     <div className="div" style={{
//       backgroundImage: `url(${back})`,
//       // backgroundPosition: "center",
//        backgroundSize: "cover",
//        backgroundRepeat: "no-repeat",
//        height: "800px"
//     }}>
//       <section id="order" className="order-section">
//         <h2 className="order-title">Buyurtma berish</h2>
//         <form className="order-form">
//           <input type="text" placeholder="Ismingiz" required />
//           <input type="tel" placeholder="Telefon raqamingiz" required />
//           <select required>
//             <option value="">Mahsulotni tanlang</option>
//             <option value="joja">Jo'ja go'shti</option>
//             <option value="tovuq">Tovuq go'shti</option>
//             <option value="tuxum">Tuxum</option>
//           </select>
//           <textarea placeholder="Qo'shimcha izoh" rows="4"></textarea>
//           <button type="submit">Buyurtma berish</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Order;
