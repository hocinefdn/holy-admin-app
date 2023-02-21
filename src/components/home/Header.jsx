import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <div className="w-40 flex justify-between absolute right-2">
            <Link to="/login">Se connecter</Link>
            <Link to="/register">S'inscrire</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    // <div className="header">
    //   <div className="w-40 flex justify-between absolute right-2">
    //     <Link to="/login">Se connecter</Link>
    //     <Link to="/register">S'inscrire</Link>
    //   </div>
    //   <div>
    //     <span className="header-title">AcheteLe</span>
    //     <span className="header-text">We specialise in something ...</span>
    //   </div>
    // </div>
  );
};

export default Header;
