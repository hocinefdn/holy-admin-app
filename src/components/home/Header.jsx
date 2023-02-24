import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/HoLyzLogo.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" width="60" />
          </Link>

          <div className="w-40 flex justify-between absolute right-4">
            <Link to="/login">Se connecter</Link>
            <Link to="/register">S'inscrire</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
