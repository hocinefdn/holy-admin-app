import React from "react";
import SideBar from "../global/side-bar/SideBar";

const ShopNotFound = () => {
  return (
    <SideBar
      content={
        <div>
          <h1 className="text-2xl text-center ">Vos boutiques</h1>
          <div className="text-center">Aucun magasin trouvé</div>
        </div>
      }
    />
  );
};

export default ShopNotFound;
