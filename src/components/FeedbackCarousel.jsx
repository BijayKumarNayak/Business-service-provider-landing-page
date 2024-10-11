// src/components/FeedbackCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data.json";
import Rating from "./Rating";

const FeedbackCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto mb-5 md:w-10/12 lg:w-8/12">
      <Slider {...settings}>
        {data.map((feedback, index) => (
          <div key={index} className="p-4">
            <div className="w-full p-3 space-y-4 text-center transition duration-200 bg-white rounded-lg shadow-lg md:w-auto hover:scale-105">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 overflow-hidden rounded-full ">
                  <img
                    src={feedback.image}
                    alt=""
                    className="object-center w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold ">{feedback.name}</h4>
                  <p className="text-sm text-gray-500">{feedback.storeName}</p>
                </div>
              </div>
              <div className="text-left">
                <p className="mb-2 text-sm">{feedback.review}</p>
                <Rating rating={feedback.rating} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
