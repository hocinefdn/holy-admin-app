import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// components
import SideBar from "../../components/global/SideBar";
import ShopsList from "../../components/shop/ShopsList";
import ShopManagement from "../../components/shop/ShopsList";

// api url
import { apiUrl } from "../../constants/api";
function ShopPage() {
  const userLoged = useSelector((state) => state.user.userData);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + "/shops/" + userLoged.id)
      .then((res) => {
        setShops(res.data.shops);
      })
      .catch((err) => console.log("err :>> ", err));
  }, [userLoged.id]);
  return <SideBar content={<ShopsList shops={shops} />} />;
}

export default ShopPage;
