import React from "react";
import Card from "../components/home/Card";
import ContactContainer from "../components/home/ContactContainer";
import Header from "../components/global/Header";
import InfoSite from "../components/home/InfoSite";
import "../components/home/style.css";
const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <InfoSite />
      <Card
        className="section"
        img="./Capture1.PNG"
        title="About the Company"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
      />
      <Card
        className="section"
        img="./Capture1.PNG"
        title="About the Company"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
      />
      <ContactContainer />
    </div>
  );
};

export default HomePage;
