import React from "react";
import "./style/card-style.css";
const CardShop = ({ shopName, style }) => {
  return (
    <div
      className="flip-card"
      style={{
        "--primary": style.primaryColor,
        "--secondary": style.secondaryColor,
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{shopName}</p>
        </div>
        <div className="flip-card-back">
          <p className="title">BIENVENUE</p>
          <p>Cliquez pour ENTRER</p>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
