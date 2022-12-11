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
  return (
    <>
      <div name="Dishes" className="populardish-container">
        <div className="wrapper">
          <div className="heading">
            <span>Our Dishes</span>
            <h1>Popular dishes</h1>
          </div>
          <div className="card-container">
            <div className="food-card">
              <div className="card-img">
                <img src={Dish1} alt="" />
              </div>
              <div className="food-heading">
                <h3>Tasty Food</h3>
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarHalf color="green" />
              </div>
            </div>
            <div className="food-card">
              <div className="card-img">
                <img src={Dish1} alt="" />
              </div>
              <div className="food-heading">
                <h3>Tasty Food</h3>
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarHalf color="green" />
              </div>
            </div>
            <div className="food-card">
              <div className="card-img">
                <img src={Dish1} alt="" />
              </div>
              <div className="food-heading">
                <h3>Tasty Food</h3>
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarHalf color="green" />
              </div>
            </div>
            <div className="food-card">
              <div className="card-img">
                <img src={Dish1} alt="" />
              </div>
              <div className="food-heading">
                <h3>Tasty Food</h3>
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarHalf color="green" />
              </div>
            </div>
            <div className="food-card">
              <div className="card-img">
                <img src={Dish1} alt="" />
              </div>
              <div className="food-heading">
                <h3>Tasty Food</h3>
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarFill color="green" />
                <BsStarHalf color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Populardishes;
