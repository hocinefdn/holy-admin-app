import React from "react";
import Header from "../components/global/Header";
import SubscriptionPrice from "../components/tariffs/SubscriptionPrice";

const TariffsPage = () => {
  const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
  ];
  return (
    <div>
      <Header />

      <h2 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center p-3">
        Tarifs
      </h2>
      <div className="mx-auto mt-4 max-w-2xl  sm:mt-4 lg:mx-0 lg:flex lg:max-w-none">
        <SubscriptionPrice
          includedFeatures={includedFeatures}
          tariff={500}
          oldTariff={700}
          name="Basic"
        />
        <SubscriptionPrice
          includedFeatures={includedFeatures}
          tariff={700}
          oldTariff={1000}
          name="Pro"
        />
        <SubscriptionPrice
          includedFeatures={includedFeatures}
          tariff={1000}
          oldTariff={1500}
          name="Premium"
        />
      </div>
    </div>
  );
};

export default TariffsPage;
