import React from "react";
import SideBar from "../components/global/SideBar";
import ShopManagement from "../components/shop/ShopManagement";
function ShopPage() {
  return <SideBar content={<ShopManagement />}></SideBar>;
}

export default ShopPage;
