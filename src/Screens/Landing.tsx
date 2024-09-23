import React from "react";
import MyCarousel from "../Components/MyCarousel";
import Heading from "../Atoms/Heading";
import SurpriseSection from "../Components/SurpriseSection";
import BestSellersSection from "../Components/BestSellersSection";
import AtmButton from "../Atoms/AtmButton";
import Flavours from "../Components/Flavours";
import TrendingCakes from "../Components/TrendingCakes";
import DesignerCakes from "../Components/DesignerCakes";
import LookingforSomething from "../Components/LookingforSomething";
import Footer from "./Footer/Footer";

const Landing = () => {
  return (
    <div className="flex flex-col gap-5 mt-20 overflow-hidden lg:mt-5">
      {/* Section 1 */}
      <div className="px-4">
        <MyCarousel />
      </div>

      {/* section 2  Surprise Your Loved One*/}
      <div className="flex flex-col p-4 lg:p-8 gap-5">
        <Heading heading={"Surprise Your Loved One"} />
        <SurpriseSection />
      </div>

      {/* section 3  Our Best Sellers*/}
      <div className="flex flex-col gap-5  p-4 lg:p-8   bg-[url('https://media.bakingo.com/bakingo-ssr/static/media/bestSellerDesk.ce04c4ff.svg')]">
        <div className="flex justify-between items-center">
          <Heading heading={"Our Best Sellers"} />
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:block hidden rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white"
          />
        </div>
        <BestSellersSection />
        <div className="flex justify-center">
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:hidden block rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white w-full"
          />
        </div>
      </div>

      {/* section 4 Experience Flavours*/}
      <div className="flex flex-col gap-5  p-4 lg:p-8 ">
        <Heading heading={"Experience Flavours"} />
        <Flavours />
      </div>

      {/* section 5  Trending Cakes*/}
      <div className="flex flex-col p-4 lg:p-8 gap-5 bg-[rgba(255,230,200,.3)]">
        <div className="flex justify-between items-center">
          <Heading heading={"Trending Cakes"} />
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:block hidden rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white"
          />
        </div>

        <TrendingCakes />
        <div className="flex justify-center">
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:hidden block rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white w-full"
          />
        </div>
      </div>

      {/* section 6  Designer Cakes*/}
      <div className="flex flex-col  p-4 lg:p-8  gap-5">
        <div className="flex justify-between items-center">
          <Heading heading={"Designer Cakes"} />
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:block hidden rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white"
          />
        </div>

        <DesignerCakes/>
        <div className="flex justify-center">
          <AtmButton
            label={"View All"}
            costomClass="lg:bg-white bg-red-500 lg:text-red-500 font-semibold border border-red-500 lg:border-red-500 lg:hover:bg-red-500 lg:hover:text-white  text-white lg:hidden block rounded-3xl lg:text-red-500 font-semibold border border-white lg:border-red-500 lg:hover:bg-red-400 lg:hover:text-white w-full"
          />
        </div>
      </div>


      {/* section 7  Looking for Something Else*/}
      <div className="flex flex-col p-4 lg:p-8 gap-32">
        <Heading heading={"Looking for Something Else"} />
        <LookingforSomething/>
      </div>


      {/* Section 8 Footer */}
      <div className="">
      <Footer/>
      </div>
    </div>
  );
};

export default Landing; 
