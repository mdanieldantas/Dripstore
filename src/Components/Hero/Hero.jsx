import React from 'react';
import "./Hero.css";
import heroImage from "../../assets/images/hero_image.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-offer-highlight">Melhores ofertas personalizadas</span>
          <h1>Queima de Estoque Nike 🔥</h1>
          <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          <a href="#" className="hero-offers-button">Ver Ofertas</a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Destaque Nike" />
        </div>
      </div>
      <div className="hero-ornament"></div>
    </section>
  );
}

export default Hero;





// import "../Hero/Hero.css"
// import heroImage from "./../../assets/images/hero_image.svg"

// function Hero() {

//   return (
//     <>
//       <div className="hero_container">
//         <div className="hero_2">
//           <div className="hero_text">
//             <span>Melhores ofertas personalizadas</span>
//             <h1>Queima de Estoque Nike 🔥</h1>
//             <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
//             </p>
//             <button><a href="#">Ver Ofertas</a></button>
//           </div>
//           <div className="hero_image">
//             <img src={heroImage} alt="" />
//           </div>
//           <div className="hero_ornament">

//           </div>
//         </div>


//       </div>
//     </>
//   )
// }

// export default Hero