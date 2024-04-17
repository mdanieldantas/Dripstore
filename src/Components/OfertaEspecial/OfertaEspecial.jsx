import "./OfertaEspecial.css";
import elipse from "./images/Ellipse 11.png"
import tenis from "./images/tenis.png"


function OfertaEspecial() {
  return (
    <div className="special-offer-container">
      <div className="special-offer-images">
        <img className="moon" src={elipse} alt="" />
        <img className="sneakers" src={tenis} alt="" />
      </div>

      <div className="special-offer-details">
        <div className="special-offer-title">
          <h2>Oferta Especial</h2>
        </div>
        <h1 className="air-jordan">Air Jordan Edição de Colecionador</h1>

        <p className="special-offer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        </p>

        <button className="special-offer-button">Ver Oferta</button>
      </div>
    </div>
  );
}

export default OfertaEspecial;



