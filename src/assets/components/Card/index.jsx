import React from "react";
import "./card.css";

const Card = ({ titulo, texto, imagen }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <div className="card">
        <div className="info">
          {/* <h1>{titulo}</h1> */}
          <p>{texto}</p>
        </div>
        <img className="card_img" src={imagen} alt={titulo} />
      </div>
    </>
  );
};

export default Card;
