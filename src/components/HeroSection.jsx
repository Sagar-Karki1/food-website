import React from "react";

//Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./HeroSection.css";

import Img1 from "../assets/home-img-1.png";
import Img2 from "../assets/home-img-2.png";
import Img3 from "../assets/home-img-3.png";

const HeroSection = () => {
  const specialFoods = [
    {
      id: 1,
      imgSrc: Img1,
      dishName: "Paneer Chowmein",
      dishDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore inventore ab quam, nisi eveniet voluptas unde tempore itaque consequatur doloribus.",
    },
    {
      id: 2,
      imgSrc: Img2,
      dishName: "Fried Chicken",
      dishDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore inventore ab quam, nisi eveniet voluptas unde tempore itaque consequatur doloribus.",
    },
    {
      id: 3,
      imgSrc: Img3,
      dishName: "Hot Pizza",
      dishDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore inventore ab quam, nisi eveniet voluptas unde tempore itaque consequatur doloribus.",
    },
  ];
  return (
    <>
      <Swiper
        name="Home"
        pagination={true}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {specialFoods.map(({ id, imgSrc, dishName, dishDetails }) => (
          <SwiperSlide key={id}>
            <div className="swiper-container">
              <div className="food-details">
                <span>Our Special Dish</span>
                <h1>{dishName}</h1>
                <p>{dishDetails}</p>
                <button className="btn">Order Now</button>
              </div>
              <div className="food-img">
                <img src={imgSrc} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSection;
