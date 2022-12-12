import React from "react";
import "./PopularDishes.css";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

import Dish1 from "../assets/dish-1.png";
import Dish2 from "../assets/dish-2.png";
import Dish3 from "../assets/dish-3.png";
import Dish4 from "../assets/dish-4.png";
import Dish5 from "../assets/dish-5.png";
import Dish6 from "../assets/dish-6.png";

const Populardishes = () => {
  const foodDetails = [
    {
      id: 1,
      img: Dish1,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 2,
      img: Dish2,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 3,
      img: Dish3,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 4,
      img: Dish4,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 5,
      img: Dish5,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 6,
      img: Dish6,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
  ];
  return (
    <>
      <div name="Dishes" className="populardish-container">
        <div className="wrapper">
          <div className="heading">
            <span>Our Dishes</span>
            <h1>Popular dishes</h1>
          </div>
          <div className="card-container">
            {foodDetails.map(({ id, img, foodInfo, dishName, price }) => (
              <div key={id} className="food-card">
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="details-wrapper">
                  <div className="heading-rating">
                    <div className="food-name">
                      <h3>{dishName}</h3>
                    </div>
                    <div className="food-rating">
                      <BsStarFill size={12} color="green" />
                      <BsStarFill size={12} color="green" />
                      <BsStarFill size={12} color="green" />
                      <BsStarFill size={12} color="green" />
                      <BsStarHalf size={12} color="green" />
                    </div>
                  </div>
                  <div className="food-info">
                    <p>{foodInfo}</p>
                  </div>
                  <div className="price">
                    <span>{price}</span>
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Populardishes;
