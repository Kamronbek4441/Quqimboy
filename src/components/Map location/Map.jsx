import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        title="QNP Manzil"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.2894667464425!2d71.5136223747787!3d41.10636881338116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4cb00727d5357%3A0x7d73cf21e6bc0144!2sQNP!5e0!3m2!1sru!2s!4v1761471165028!5m2!1sru!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;


// import React from 'react';

// const Map = () => {
//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '450px',
//         borderRadius: '12px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//       }}
//     >
//       <iframe
//         title="QNP Manzil"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.2894667464425!2d71.5136223747787!3d41.10636881338116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4cb00727d5357%3A0x7d73cf21e6bc0144!2sQNP!5e0!3m2!1sru!2s!4v1761471165028!5m2!1sru!2s"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// };

// export default Map;
