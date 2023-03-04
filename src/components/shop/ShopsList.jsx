import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// mui
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { apiUrl } from "../../constants/api";

// components
import CardList from "./CardShop";
import { useSelector } from "react-redux";

const ShopsList = ({ shops }) => {
  return (
    <div>
      <h1 className="text-2xl text-center ">Vos boutiques</h1>
      <div className="p-4 flex justify-end">
        <Link to="/shop/create-shop">
          <Button variant="contained" color="secondary" startIcon={<Add />}>
            Ajouter une boutique
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-20">
          {shops.map((shop) => (
            <CardList shop={shop} key={`shop-${shop.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsList;
