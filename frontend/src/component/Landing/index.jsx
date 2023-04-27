import React from "react";
import Banner from "./Banner/Banner";
import CategoriesToBag from "./CategoriesToBag/CategoriesToBag";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import Exclusive from "./Exclusive/Exclusive";
import SlashedPrices from "./SlashedPrices/SlashedPrices";
import TopBrands from "./TopBrands/TopBrands";
import TopPicks from "./TopPicks/TopPicks";

const Landing = () => {
  return (
    <>
      <Banner />
      <DealOfTheDay />
      <Exclusive />
      <TopPicks/>
      <CategoriesToBag/>
      <TopBrands/>
      <SlashedPrices/>
    </>
  );
};

export default Landing;
