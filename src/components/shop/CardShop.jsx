import React from "react";
import { Link } from "react-router-dom";
import "./style/card-style.css";
const CardShop = ({ shop }) => {
  let style = JSON.parse(shop.style);
  return (
    <Link to={`/shop/${shop.id}`}>
      <div
        className="flip-card"
        style={{
          "--primary": style.primaryColor,
          "--secondary": style.secondaryColor,
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{shop.name}</p>
          </div>
          <div className="flip-card-back">
            <p className="title">BIENVENUE</p>
            <p>Cliquez pour ENTRER</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardShop;
