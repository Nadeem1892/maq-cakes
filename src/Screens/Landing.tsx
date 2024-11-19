import MyCarousel from "../Components/MyCarousel";
import Heading from "../Atoms/Heading";
import SurpriseSection from "../Components/SurpriseSection";
import BestSellersSection from "../Components/BestSellersSection";
import AtmButton from "../Atoms/AtmButton";
import Flavours from "../Components/Flavours";
import TrendingCakes from "../Components/TrendingCakes";
import DesignerCakes from "../Components/DesignerCakes";
import LookingforSomething from "../Components/LookingforSomething";
import { Outlet } from "react-router-dom";
import AtmStutasCard from "../Atoms/AtmStutasCard";
import CategoryCrousel from "../Components/CategoryCrousel";



const Landing = () => {
 

  return (
    <div className={` relative flex flex-col gap-5 mt-20 overflow-hidden lg:mt-32`}>
      {/* this Outlate Landing Chiled */}
      <div>
        <Outlet/>
      </div>

      <div className="px-4">
    <CategoryCrousel/>
      </div>
      {/* Section 1 */}
      <div className="px-4 ">
        <MyCarousel />
      </div>

      {/* section 2  Surprise Your Loved One*/}
      <div className="flex flex-col gap-5 p-4 lg:p-8">
        <Heading heading={"Surprise Your Loved One"} />
        <SurpriseSection />
      </div>

      {/* section 3  Our Best Sellers*/}
      <div className="flex flex-col gap-5  p-4 lg:p-8   bg-[url('https://media.bakingo.com/bakingo-ssr/static/media/bestSellerDesk.ce04c4ff.svg')]">
        <div className="flex items-center justify-between">
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
      <div className="flex flex-col gap-5 p-4 lg:p-8 ">
        <Heading heading={"Experience Flavours"} />
        <Flavours />
      </div>

      {/* section 5  Trending Cakes*/}
      <div className="flex flex-col p-4 lg:p-8 gap-5 bg-[rgba(255,230,200,.3)]">
        <div className="flex items-center justify-between">
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
      <div className="flex flex-col gap-5 p-4 lg:p-8">
        <div className="flex items-center justify-between">
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
      <div className="flex flex-col gap-32 p-4 lg:p-8">
        <Heading heading={"Looking for Something Else"} />
        <LookingforSomething/>
      </div>
    </div>
  );
};

export default Landing; 
