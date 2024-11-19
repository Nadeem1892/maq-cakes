import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AtmStatusCard from "../Atoms/AtmStutasCard";

const CategoryCrousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        };
  return (
    <Slider {...settings}>
    <div className="px-1">
        
    <AtmStatusCard
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="All Cakes"
        onClick={() => console.log("Card clicked!")} 
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Birthday Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Customize Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Wedding Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Theme Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Anniversary Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Dry Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Jar Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Cup Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Brownie"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Dream Cakes"
        altText="Another description" // altText is now optional
      />
    </div>

    <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Cookies"
        altText="Another description" // altText is now optional
      />
    </div>

    {/* <div className="px-1 ">
    <AtmStatusCard 
        imageSrc="https://cdn.igp.com/f_auto,q_auto,t_pnopt2prodlp/banners//PLP_lens_20241104112920.jpg" 
        label="Swess Roll"
        altText="Another description" // altText is now optional
      />
    </div> */}

   
  </Slider>
  )
}

export default CategoryCrousel