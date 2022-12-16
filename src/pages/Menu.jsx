import React from "react";
import "./Menu.css";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import Menu1 from "../assets/menu-1.jpg";
import Menu2 from "../assets/menu-2.jpg";
import Menu3 from "../assets/menu-3.jpg";
import Menu4 from "../assets/menu-4.jpg";
import Menu5 from "../assets/menu-5.jpg";
import Menu6 from "../assets/menu-6.jpg";
import Menu7 from "../assets/menu-7.jpg";
import Menu8 from "../assets/menu-8.jpg";
import Menu9 from "../assets/menu-9.jpg";

const Menu = () => {
  const menuDetails = [
    {
      id: 1,
      img: Menu1,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 2,
      img: Menu2,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 3,
      img: Menu3,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 4,
      img: Menu4,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 5,
      img: Menu5,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 6,
      img: Menu6,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 7,
      img: Menu7,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 8,
      img: Menu8,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
    {
      id: 9,
      img: Menu9,
      foodInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestiae.",
      price: "15.58$",
      dishName: "Chicken Burger",
    },
  ];
  return (
    <>
      <div className="menu-container">
        <div className="menu-heading">
          <span>Our Menu</span>
          <h3>today's speciality</h3>
        </div>
        <div className="card-wrapper">
          {menuDetails.map(({ id, img, foodInfo, dishName, price }) => (
            <div key={id} className="menu-card">
              <div className="menu-img">
                <img src={img} alt="" />
              </div>
              <div className="menutext-wrapper">
                <div className="rating">
                  <div className="menu-name">
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
                <div className="favourite-icon">
                  <FaHeart size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
