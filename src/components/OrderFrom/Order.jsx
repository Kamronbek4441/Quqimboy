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

  const [showToast, setShowToast] = useState(false); // toast holati

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sana va vaqt (soniyasiz)
    const now = new Date();
    const date = now.toLocaleDateString("uz-UZ");
    const time = now.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });

    const message = `
📥 Yangi Buyurtma
📅 Sana: ${date}
⏰ Vaqt: ${time}
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
🛒 Mahsulot: ${formData.product}
📝 Izoh: ${formData.comment}
    `;

    const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
    const chatId = "-1002804364919";
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

    // Toast chiqarish
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000); // 3 soniyada yopiladi

    // Forma tozalash
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
        minHeight: "68vh",
      }}
    >
      {/* Toast xabar */}
      {showToast && (
        <div className="toast">
          ✅ Buyurtmangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.
        </div>
      )}

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
            <option value="Sifatli naslli tuxumlar">Sifatli naslli tuxumlar</option>
            <option value="Bir kunlik naslli jo'jalar">Bir kunlik naslli jo'jalar</option>
            <option value="Gril go'shti">Gril go'shti</option>
            <option value="Katta broyler go'shti">Katta broyler go'shti</option>
            <option value="START ratsion ozuqa yem">START ratsion ozuqa yem</option>
            <option value="ROST ratsion ozuqa yem">ROST ratsion ozuqa yem</option>
            <option value="FINISH ratsion ozuqa yem">FINISH ratsion ozuqa yem</option>
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


// import React, { useState } from "react";
// import "./Order.css";
// import back from "../../assets/Background.svg";

// const Order = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     product: "",
//     comment: "",
//   });

//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const now = new Date();
//     const date = now.toLocaleDateString("uz-UZ");
//     const time = now.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });

//     const message = `
// 📥 Yangi Buyurtma
// 📅 Sana: ${date}
// ⏰ Vaqt: ${time}
// 👤 Ism: ${formData.name}
// 📞 Telefon: ${formData.phone}
// 🛒 Mahsulot: ${formData.product}
// 📝 Izoh: ${formData.comment}
//     `;

//     const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
//     const chatId = "-1002804364919";
//     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

//     await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: message,
//         parse_mode: "HTML",
//       }),
//     });

//     setShowModal(true);

//     // Forma tozalash
//     setFormData({ name: "", phone: "", product: "", comment: "" });
//   };

//   return (
//     <div
//       className="div"
//       style={{
//         backgroundImage: `url(${back})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         minHeight: "68vh",
//       }}
//     >
//       <section id="order" className="order-section">
//         <h2 className="order-title">Buyurtma berish</h2>
//         <form className="order-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Ismingiz"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Telefon raqamingiz"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <select
//             name="product"
//             value={formData.product}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Mahsulotni tanlang</option>
//             <option value="Sifatli naslli tuxumlar">Sifatli naslli tuxumlar</option>
//             <option value="Bir kunlik naslli jo'jalar">Bir kunlik naslli jo'jalar</option>
//             <option value="Gril go'shti">Gril go'shti</option>
//             <option value="Katta broyler go'shti">Katta broyler go'shti</option>
//             <option value="START ratsion ozuqa yem">START ratsion ozuqa yem</option>
//             <option value="ROST ratsion ozuqa yem">ROST ratsion ozuqa yem</option>
//             <option value="FINISH ratsion ozuqa yem">FINISH ratsion ozuqa yem</option>
//           </select>
//           <textarea
//             name="comment"
//             placeholder="Qo'shimcha izoh"
//             rows="4"
//             value={formData.comment}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit">Buyurtma berish</button>
//         </form>
//       </section>

//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h3>✅ Buyurtmangiz qabul qilindi!</h3>
//             <p>Tez orada siz bilan bog‘lanamiz.</p>
//             <button onClick={() => setShowModal(false)}>Yopish</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;


// // import React, { useState } from "react";
// // import "./Order.css";
// // import back from "../../assets/Background.svg";

// // const Order = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     product: "",
// //     comment: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Sana va vaqtni olish (soniyasiz)
// //     const now = new Date();
// //     const date = now.toLocaleDateString("uz-UZ");
// //     const time = now.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });

// //     const message = `
// // 📥 Yangi Buyurtma
// // 📅 Sana: ${date}
// // ⏰ Vaqt: ${time}
// // 👤 Ism: ${formData.name}
// // 📞 Telefon: ${formData.phone}
// // 🛒 Mahsulot: ${formData.product}
// // 📝 Izoh: ${formData.comment}
// //     `;

// //     const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
// //     const chatId = "-1002804364919";
// //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

// //     await fetch(url, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         chat_id: chatId,
// //         text: message,
// //         parse_mode: "HTML",
// //       }),
// //     });

// //     alert("Buyurtma yuborildi!");
// //     setFormData({ name: "", phone: "", product: "", comment: "" });
// //   };

// //   return (
// //     <div
// //       className="div"
// //       style={{
// //         backgroundImage: `url(${back})`,
// //         backgroundSize: "cover",
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //         minHeight: "68vh",
// //       }}
// //     >
// //       <section id="order" className="order-section">
// //         <h2 className="order-title">Buyurtma berish</h2>
// //         <form className="order-form" onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Ismingiz"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="tel"
// //             name="phone"
// //             placeholder="Telefon raqamingiz"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             required
// //           />
// //           <select
// //             name="product"
// //             value={formData.product}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="">Mahsulotni tanlang</option>
// //             <option value="Sifatli naslli tuxumlar">Sifatli naslli tuxumlar</option>
// //             <option value="Bir kunlik naslli jo'jalar">Bir kunlik naslli jo'jalar</option>
// //             <option value="Gril go'shti">Gril go'shti</option>
// //             <option value="Katta broyler go'shti">Katta broyler go'shti</option>
// //             <option value="START ratsion ozuqa yem">START ratsion ozuqa yem</option>
// //             <option value="ROST ratsion ozuqa yem">ROST ratsion ozuqa yem</option>
// //             <option value="FINISH ratsion ozuqa yem">FINISH ratsion ozuqa yem</option>
// //           </select>
// //           <textarea
// //             name="comment"
// //             placeholder="Qo'shimcha izoh"
// //             rows="4"
// //             value={formData.comment}
// //             onChange={handleChange}
// //           ></textarea>
// //           <button type="submit">Buyurtma berish</button>
// //         </form>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Order;


// // // import React, { useState } from "react";
// // // import "./Order.css";
// // // import back from "../../assets/Background.svg";

// // // const Order = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     phone: "",
// // //     product: "",
// // //     comment: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     // Sana va vaqtni olish
// // //     const now = new Date();
// // //     const date = now.toLocaleDateString("uz-UZ");
// // //     const time = now.toLocaleTimeString("uz-UZ");

// // //     const message = `
// // // 📥 Yangi Buyurtma
// // // 📅 Sana: ${date}
// // // ⏰ Vaqt: ${time}
// // // 👤 Ism: ${formData.name}
// // // 📞 Telefon: ${formData.phone}
// // // 🛒 Mahsulot: ${formData.product}
// // // 📝 Izoh: ${formData.comment}
// // //     `;

// // //     const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
// // //     const chatId = "-1002804364919";
// // //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

// // //     await fetch(url, {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({
// // //         chat_id: chatId,
// // //         text: message,
// // //         parse_mode: "HTML",
// // //       }),
// // //     });

// // //     alert(`Buyurtma yuborildi!\n📅 ${date} ⏰ ${time}`);
// // //     setFormData({ name: "", phone: "", product: "", comment: "" });
// // //   };

// // //   return (
// // //     <div
// // //       className="div"
// // //       style={{
// // //         backgroundImage: `url(${back})`,
// // //         backgroundSize: "cover",
// // //         backgroundRepeat: "no-repeat",
// // //         backgroundPosition: "center",
// // //         minHeight: "68vh",
// // //       }}
// // //     >
// // //       <section id="order" className="order-section">
// // //         <h2 className="order-title">Buyurtma berish</h2>
// // //         <form className="order-form" onSubmit={handleSubmit}>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Ismingiz"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //           <input
// // //             type="tel"
// // //             name="phone"
// // //             placeholder="Telefon raqamingiz"
// // //             value={formData.phone}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //           <select
// // //             name="product"
// // //             value={formData.product}
// // //             onChange={handleChange}
// // //             required
// // //           >
// // //             <option value="">Mahsulotni tanlang</option>
// // //             <option value="Sifatli naslli tuxumlar">Sifatli naslli tuxumlar</option>
// // //             <option value="Bir kunlik naslli jo'jalar">Bir kunlik naslli jo'jalar</option>
// // //             <option value="Gril go'shti">Gril go'shti</option>
// // //             <option value="Katta broyler go'shti">Katta broyler go'shti</option>
// // //             <option value="START ratsion ozuqa yem">START ratsion ozuqa yem</option>
// // //             <option value="ROST ratsion ozuqa yem">ROST ratsion ozuqa yem</option>
// // //             <option value="FINISH ratsion ozuqa yem">FINISH ratsion ozuqa yem</option>
// // //           </select>
// // //           <textarea
// // //             name="comment"
// // //             placeholder="Qo'shimcha izoh"
// // //             rows="4"
// // //             value={formData.comment}
// // //             onChange={handleChange}
// // //           ></textarea>
// // //           <button type="submit">Buyurtma berish</button>
// // //         </form>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Order;


// // // // import React, { useState } from "react";
// // // // import "./Order.css";
// // // // import back from "../../assets/Background.svg";

// // // // const Order = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     product: "",
// // // //     comment: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const message = `
// // // // 📥 Yangi Buyurtma
// // // // 👤 Ism: ${formData.name}
// // // // 📞 Telefon: ${formData.phone}
// // // // 🛒 Mahsulot: ${formData.product}
// // // // 📝 Izoh: ${formData.comment}
// // // //     `;

// // // //     const botToken = "7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA";
// // // //     const chatId = "-1002804364919";

// // // //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

// // // //     await fetch(url, {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({
// // // //         chat_id: chatId,
// // // //         text: message,
// // // //         parse_mode: "HTML",
// // // //       }),
// // // //     });

// // // //     alert("Buyurtma yuborildi!");
// // // //     setFormData({ name: "", phone: "", product: "", comment: "" });
// // // //   };

// // // //   return (
// // // //     <div
// // // //       className="div"
// // // //       style={{
// // // //         backgroundImage: `url(${back})`,
// // // //         backgroundSize: "cover",
// // // //         backgroundRepeat: "no-repeat",
// // // //         backgroundPosition: "center",
// // // //         // height: "800px"
// // // //          minHeight: "68vh"
// // // //       }}
// // // //     >
// // // //       <section id="order" className="order-section">
// // // //         <h2 className="order-title">Buyurtma berish</h2>
// // // //         <form className="order-form" onSubmit={handleSubmit}>
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             placeholder="Ismingiz"
// // // //             value={formData.name}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             name="phone"
// // // //             placeholder="Telefon raqamingiz"
// // // //             value={formData.phone}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //           <select
// // // //             name="product"
// // // //             value={formData.product}
// // // //             onChange={handleChange}
// // // //             required
// // // //           >
// // // //             <option value="">Mahsulotni tanlang</option>
// // // //             <option value="Sifatli naslli tuxumlar">Sifatli naslli tuxumlar</option>
// // // //             <option value="Bir kunlik naslli jo'jalar">Bir kunlik naslli jo'jalar</option>
// // // //             <option value="Gril go'shti">Gril go'shti</option>
// // // //             <option value="Katta broyler go'shti">Katta broyler go'shti</option>
// // // //             <option value="START ratsion ozuqa yem">START ratsion ozuqa yem</option>
// // // //             <option value="ROST ratsion ozuqa yem">ROST ratsion ozuqa yem</option>
// // // //             <option value="FINISH ratsion ozuqa yem">FINISH ratsion ozuqa yem</option>
// // // //           </select>
// // // //           <textarea
// // // //             name="comment"
// // // //             placeholder="Qo'shimcha izoh"
// // // //             rows="4"
// // // //             value={formData.comment}
// // // //             onChange={handleChange}
// // // //           ></textarea>
// // // //           <button type="submit">Buyurtma berish</button>
// // // //         </form>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Order;


// // // // // import React from "react";
// // // // // import "./Order.css";
// // // // // import back from "../../assets/Background.svg";

// // // // // const Order = () => {
// // // // //   return (
// // // // //     <div className="div" style={{
// // // // //       backgroundImage: `url(${back})`,
// // // // //       // backgroundPosition: "center",
// // // // //        backgroundSize: "cover",
// // // // //        backgroundRepeat: "no-repeat",
// // // // //        height: "800px"
// // // // //     }}>
// // // // //       <section id="order" className="order-section">
// // // // //         <h2 className="order-title">Buyurtma berish</h2>
// // // // //         <form className="order-form">
// // // // //           <input type="text" placeholder="Ismingiz" required />
// // // // //           <input type="tel" placeholder="Telefon raqamingiz" required />
// // // // //           <select required>
// // // // //             <option value="">Mahsulotni tanlang</option>
// // // // //             <option value="joja">Jo'ja go'shti</option>
// // // // //             <option value="tovuq">Tovuq go'shti</option>
// // // // //             <option value="tuxum">Tuxum</option>
// // // // //           </select>
// // // // //           <textarea placeholder="Qo'shimcha izoh" rows="4"></textarea>
// // // // //           <button type="submit">Buyurtma berish</button>
// // // // //         </form>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Order;
