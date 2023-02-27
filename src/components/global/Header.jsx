import { AppBar, Box, Button, Paper, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/HoLyzLogo.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Paper elevation={3}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="logo" width="60" />
            </Link>
            <div className="flex justify-end">
              <Link to="/tariffs" className="mr-2 hover:underline">
                Tarifs
              </Link>
              <Link to="/contact" className="mr-2 hover:underline">
                Contact
              </Link>
            </div>

            <div className="flex justify-between absolute right-4 items-center">
              <div className="flex justify-end">
                <Link to="/login" className="mr-2 hover:underline">
                  Se connecter
                </Link>
                <Link to="/register" className="mr-2 hover:underline">
                  S'inscrire
                </Link>
              </div>

              <Link
                to="/test"
                className="cursor-pointer bg-red-500 px-3 py-2 font-bold text-md rounded-3xl hover:bg-red-700 text-white"
              >
                Démarrer l’essai gratuit
              </Link>
            </div>
          </Toolbar>
        </Paper>
      </AppBar>
    </Box>
  );
};

export default Header;
