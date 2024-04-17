import React from "react";
import tenisCard from "./../../assets/tennisCard01.png"

function Card(props) {
  return (
    <>
      <div className="card-container">

        <div className="cardIndividual">
          <div className="descrição">
            <div className="desconto"><h2>{props.title}</h2></div>

            <img className="tenis-img-card" src={tenisCard} alt="" />
          </div>

          <div>
            <p>{props.description}</p>
            <p>Price${props.price}</p>
            <img src={props.path} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Card