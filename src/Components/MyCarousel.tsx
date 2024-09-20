import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        };

  return (
    <Slider {...settings}>
    <div className="flex items-center justify-center px-1">
      <div className='lg:rounded-lg rounded-2xl'>
        <img
          className="mx-auto lg:rounded-lg rounded-2xl"
          src="https://bkmedia.bakingo.com/jungle_cake_desktop_0.jpg"
          alt="Cake 1"
        />
      </div>
    </div>
    <div className="flex items-center justify-center px-1 ">
      <div className='lg:rounded-lg rounded-2xl'>
        <img
          className="mx-auto lg:rounded-lg rounded-2xl"
          src="https://bkmedia.bakingo.com/regular-cake-desktop_2.jpg"
          alt="Cake 2"
        />
      </div>
    </div>
    <div className="flex items-center justify-center px-1 ">
      <div className='lg:rounded-lg rounded-2xl'>
        <img
          className="mx-auto lg:rounded-lg rounded-2xl"
          src="https://bkmedia.bakingo.com/birthday_cake_desktop.jpg"
          alt="Cake 3"
        />
      </div>
    </div>

    <div className="flex items-center justify-center px-1 ">
      <div className='lg:rounded-lg rounded-2xl'>
        <img
          className="mx-auto lg:rounded-lg rounded-2xl"
          src="https://bkmedia.bakingo.com/gourmet_cake_desktop_11.jpg"
          alt="Cake 3"
        />
      </div>
    </div>
  </Slider>
  )
}

export default MyCarousel