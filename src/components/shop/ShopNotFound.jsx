import { CircularProgress } from "@mui/material";
import React from "react";
import SideBar from "../global/side-bar/SideBar";

const ShopNotFound = ({ isLoading }) => {
  return (
    <div className="text-2xl text-center">
      {isLoading ? (
        <div>
          <CircularProgress color="success" size={70} thickness={5} />
        </div>
      ) : (
        "Aucun magasin trouvé"
      )}
    </div>
  );
};

export default ShopNotFound;
