import React from "react";
import "./containerText.css";

const ContainerText = ({ titulo, info }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <div className="containerText">
        {/* <h1>{titulo}</h1> */}
        {info()}
      </div>
    </>
  );
};

export default ContainerText;
