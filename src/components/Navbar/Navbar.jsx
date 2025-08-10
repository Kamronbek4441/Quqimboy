import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">
            <span>QNP</span>
          </div>
          <div className="logo-text">
            <span>
              Ququmboy <br /> Naslchilik <br /> Parranda
            </span>
          </div>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/" className="n1" onClick={() => setIsOpen(false)}>Bosh Sahifa</Link></li>
          <li><Link to="/Products" className="n2" onClick={() => setIsOpen(false)}>Mahsulotlar</Link></li>
          <li><Link to="/About" className="n3" onClick={() => setIsOpen(false)}>Biz Haqimizda</Link></li>
          <li><Link to="/Hamkorlar" className="n3" onClick={() => setIsOpen(false)}>Hamkorlarimiz</Link></li>
          <li><Link to="/Order" className="n4" onClick={() => setIsOpen(false)}>Buyurtma</Link></li>
          <li><Link to="/Contact" className="n5" onClick={() => setIsOpen(false)}>Aloqa</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="nav">
//       <nav className="navbar">
//         <div className="logo">
//           <div className="logo-circle">
//             <span>QNP</span>
//           </div>
//           <div className="logo-text">
//             <span>
//               Ququmboy <br /> Naslchilik <br /> Parranda
//             </span>
//           </div>
//         </div>

//         {/* Hamburger icon */}
//         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//           <div className={isOpen ? "bar open" : "bar"}></div>
//           <div className={isOpen ? "bar open" : "bar"}></div>
//           <div className={isOpen ? "bar open" : "bar"}></div>
//         </div>

//         {/* Nav links */}
//         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//           <li>
//             <Link className="n1" to="/" onClick={() => setIsOpen(false)}>Bosh Sahifa</Link>
//           </li>
//           <li>
//             <Link className="n2" to="/Products" onClick={() => setIsOpen(false)}>Mahsulotlar</Link>
//           </li>
//           <li>
//             <Link className="n3" to="/About" onClick={() => setIsOpen(false)}>Biz Haqimizda</Link>
//           </li>
//           <li>
//             <Link className="n3" to="/Hamkorlar" onClick={() => setIsOpen(false)}>Hamkorlarimiz</Link>
//           </li>
//           <li>
//             <Link className="n4" to="/Order" onClick={() => setIsOpen(false)}>Buyurtma</Link>
//           </li>
//           <li>
//             <Link className="n5" to="/Contact" onClick={() => setIsOpen(false)}>Aloqa</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   return (
// //     <div className="nav">
// //       <nav class="navbar">
// //         <div class="logo">
// //           <div class="logo-circle">
// //             <span>QNP</span>
// //           </div>
// //           <div class="logo-text">
// //             <span>Ququmboy <br /> Naslchilik <br /> Parranda</span>
// //           </div>
// //         </div>
// //         <ul class="nav-links">
// //           <li>
// //               <Link className="n1" to="/">Bosh Sahifa</Link>
// //           </li>
// //           <li>
// //             <Link className="n2" to="/Products">Mahsulotlar</Link>
// //           </li>
// //           <li>
// //             <Link className="n3" to="/About">Biz Haqimizda</Link>
// //           </li>
// //           <li>
// //             <Link className="n3" to="/Hamkorlar">Hamkorlarimiz</Link>
// //           </li>
// //           <li>
// //             <Link className="n4" to="/Order">Buyurtma</Link>
// //           </li>
// //           <li>
// //             <Link className="n5" to="/Contact">Aloqa</Link>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;
