import React from "react";
import MyCarousel from "../Components/MyCarousel";
import Heading from "../Atoms/Heading";
import SurpriseSection from "../Components/SurpriseSection";
import BestSellersSection from "../Components/BestSellersSection";
import AtmButton from "../Atoms/AtmButton";

const Landing = () => {
  return (
    <div className="flex flex-col gap-10  mt-20 overflow-hidden lg:mt-5">
      <div className="px-4">
        <MyCarousel />
      </div>

      <div className="flex flex-col p-4 gap-5 py-5">
        <Heading heading={"Surprise Your Loved One"} />
        <SurpriseSection />
      </div>

      <div className="flex flex-col gap-5 p-4   bg-[url('https://media.bakingo.com/bakingo-ssr/static/media/bestSellerDesk.ce04c4ff.svg')]">
      <div className="flex justify-between items-center">
      <Heading heading={"Our Best Sellers"} />
      <AtmButton label={"View All"} costomClass="lg:block hidden"/>
      </div>
        <BestSellersSection />
        <div className="flex justify-center"><AtmButton label={"View All"} costomClass="lg:hidden w-full"/></div>
      </div>
    </div>
  );
};

export default Landing;
