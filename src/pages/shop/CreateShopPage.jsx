import React from "react";
import SideBar from "../../components/global/side-bar/SideBar";
import CreateShopForm from "../../components/shop/CreateShopForm";

const CreateShop = () => {
  return <SideBar content={<CreateShopForm />} />;
};

export default CreateShop;
