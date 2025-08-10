import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Hero from "./components/HeroSection/Hero.jsx"
import Order from "./components/OrderFrom/Order.jsx"
import Products from "./components/Products/Products.jsx"
import Hamkorlar from "./components/Hamkorlar/Hamkorlar.jsx";
import Footer from "./components/Footer/Footer.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Hamkorlar" element={<Hamkorlar />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
