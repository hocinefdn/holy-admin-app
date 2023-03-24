import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import SideBar from "../../components/global/side-bar/SideBar";
import ShopsList from "../../components/shop/ShopsList";

// api url
import { apiUrl } from "../../constants/api";
import { resetShop } from "../../store/reducers/shopSlice";
import ShopNotFound from "../../components/shop/ShopNotFound";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

function ShopsPage() {
  const userLoged = useSelector((state) => state.user.userData);
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    //reset shop
    dispatch(resetShop());
    axios
      .get(apiUrl + "/shops/" + userLoged.id)
      .then((res) => {
        setShops(res.data.shops);
        setIsLoading(false);
      })
      .catch((err) => console.log("err :>> ", err));
  }, []);

  return (
    <SideBar
      content={
        <div>
          <h1 className="text-2xl text-center ">Vos boutiques</h1>
          <div className="p-4 flex justify-end">
            <Link to="/shop/create-shop">
              <Button variant="contained" color="secondary" startIcon={<Add />}>
                Ajouter une boutique
              </Button>
            </Link>
          </div>

          {shops.length ? (
            <ShopsList shops={shops} />
          ) : (
            <ShopNotFound isLoading={isLoading} />
          )}
        </div>
      }
    />
  );
}

export default ShopsPage;
