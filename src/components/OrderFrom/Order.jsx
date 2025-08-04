import React, { useState } from 'react';
import "./Order.css";

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const botToken = '7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA';
    const chatId = '5764570183';
    const message = `
📥 Yangi buyurtma:
👤 Ismi: ${formData.name}
📞 Telefon: ${formData.phone}
📦 Mahsulot: ${formData.product}
📝 Izoh: ${formData.comment || 'Yo‘q'}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.ok){
        alert("Buyurtmangiz yuborildi!");
        setFormData({name: '', phone: '', product: '', comment: ''});
      } else {
        alert("Xatolik yuz berdi!");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Tarmoq xatosi!");
    });
  }

  return (
    <section id="order" className="order-form">
      <h2>Buyurtma berish</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ismingiz" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon raqamingiz" required />
        <select name="product" value={formData.product} onChange={handleChange} required>
          <option value="">Mahsulotni tanlang</option>
          <option value="Broiler Butun (1kg)">Broiler Butun (1kg)</option>
          <option value="Broiler File (1kg)">Broiler File (1kg)</option>
        </select>
        <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Qo‘shimcha izoh"></textarea>
        <button type="submit">Buyurtma berish</button>
      </form>
    </section>
  )
}

export default Order;


// import React from 'react'
// import "./Order.css"

// const Order = () => {
//   return (
//     <section id="order" className="order-form">
//       <h2>Buyurtma berish</h2>
//       <form>
//         <input type="text" placeholder="Ismingiz" required />
//         <input type="tel" placeholder="Telefon raqamingiz" required />
//         <select required>
//           <option value="">Mahsulotni tanlang</option>
//           <option value="butun">Broiler Butun (1kg)</option>
//           <option value="file">Broiler File (1kg)</option>
//         </select>
//         <textarea placeholder="Qo‘shimcha izoh"></textarea>
//         <button type="submit">Buyurtma berish</button>
//       </form>
//     </section>
//   )
// }

// export default Order
