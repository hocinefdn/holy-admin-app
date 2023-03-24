import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../components/global/side-bar/SideBar";

function StatsPage() {
  const shop = useSelector((state) => state.shop.shopData);

  return <SideBar content={<div>stats de {shop.name}</div>}></SideBar>;
}

export default StatsPage;
