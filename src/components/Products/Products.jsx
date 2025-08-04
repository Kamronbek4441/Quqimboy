import React from 'react'
import "./Products.css"

const Products = () => {
  return (
     <section id="products" className="products">
      <h2>Mahsulotlar</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="/images/broiler1.jpg" alt="Broiler 1" />
          <h3>Broiler Butun (1kg)</h3>
          <p>Narxi: 30,000 so‘m</p>
        </div>
        <div className="product-card">
          <img src="/images/broiler2.jpg" alt="Broiler 2" />
          <h3>Broiler File (1kg)</h3>
          <p>Narxi: 45,000 so‘m</p>
        </div>
      </div>
    </section>
  )
}

export default Products
