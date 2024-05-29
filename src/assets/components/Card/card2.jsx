import React from "react";
import "./card.css";

const Card2 = ({ titulo, texto, imagen }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <div className="card">
        <div className="info">
          {/* <h1>{titulo}</h1> */}
          {texto()}
        </div>
        <img className="card_img" src={imagen} alt={titulo} />
      </div>
    </>
  );
};

export default Card2;
