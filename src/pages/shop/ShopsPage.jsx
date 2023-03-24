import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/global/loader/Loader";

// components
import SideBar from "../../components/global/side-bar/SideBar";
import ShopInfo from "../../components/shop/ShopInfo";
import ShopsList from "../../components/shop/ShopsList";
import ShopManagement from "../../components/shop/ShopsList";

// api url
import { apiUrl } from "../../constants/api";
import ShopNotFound from "./ShopNotFound";
function ShopsPage() {
  const userLoged = useSelector((state) => state.user.userData);
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
          {shops ? <ShopsList shops={shops} /> : <ShopNotFound />}
          {isLoading ? (
            <div className="flex justify-center">
              <CircularProgress color="success" size={70} thickness={5} />
            </div>
          ) : (
            ""
          )}
        </div>
      }
    />
  );
}

export default ShopsPage;
