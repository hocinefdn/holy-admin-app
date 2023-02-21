import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="w-40 flex justify-between absolute right-2">
        <Link to="/login">Se connecter</Link>
        <Link to="/register">S'inscrire</Link>
      </div>
      <div>
        <span className="header-title">AcheteLe</span>
        <span className="header-text">We specialise in something ...</span>
      </div>
    </div>
  );
};

export default Header;
