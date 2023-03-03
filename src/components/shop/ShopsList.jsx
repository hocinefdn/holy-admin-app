import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// components
import CardList from "./CardShop";
const ShopsList = () => {
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
        <ul className="grid grid-cols-2 gap-20">
          <li>
            <CardList
              shopName="test 1"
              style={{ primaryColor: "#FC0101", secondaryColor: "#E5FC01" }}
            />
          </li>
          <li>
            <CardList
              shopName="test 2"
              style={{ primaryColor: "#01FC01", secondaryColor: "#FC01DE" }}
            />
          </li>
          <li>
            <CardList
              shopName="test 3"
              style={{ primaryColor: "#FC01DE", secondaryColor: "#01E9FC" }}
            />
          </li>
          <li>
            <CardList
              shopName="test 4"
              style={{ primaryColor: "#1e90ff", secondaryColor: "#fd0000" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopsList;
