import React from "react";
import { useDispatch } from "react-redux";
import { setShopData } from "../../store/reducers/shopSlice";
import "./style/card-style.css";

const CardShop = ({ shop }) => {
  const dispatch = useDispatch();
  let style = JSON.parse(shop.style);

  const handleClick = () => {
    dispatch(setShopData({ shop: shop }));
    window.location.href = `/${shop.slug}/stats`;
  };
  return (
    <div
      className="flip-card"
      style={{
        "--primary": style.primaryColor,
        "--secondary": style.secondaryColor,
      }}
      onClick={handleClick}
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
  );
};

export default CardShop;
