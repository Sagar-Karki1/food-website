import React from "react";
import "./About.css";

import { FaShuttleVan, FaDollarSign } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <>
      <div name="about" className="about-container">
        <div className="about-wrapper">
          <div className="about-heading">
            <span>About Us</span>
            <h3>Why choose us?</h3>
          </div>
          <div className="content-wrapper">
            <div className="img-wrapper">
              <img src={AboutImg} alt="" />
            </div>
            <div className="text-wrapper">
              <div className="main-text">
                <h2>best food in the country</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  consectetur veniam suscipit nesciunt eos dolores, sit
                  accusantium molestiae perspiciatis ratione fugiat, ipsam
                  delectus. Aperiam, distinctio nam obcaecati eligendi corrupti
                  eos, tenetur veniam, saepe libero veritatis soluta autem
                  reprehenderit quaerat aspernatur?
                </p>
              </div>
              <div className="delivery-info">
                <button className="delivery-btn">
                  <span>
                    <FaShuttleVan color="green" size={16} />
                  </span>
                  Free Delivery
                </button>
                <button className="delivery-btn">
                  <span>
                    <FaDollarSign color="green" size={16} />
                  </span>
                  Easy Payments
                </button>
                <button className="delivery-btn">
                  <span>
                    <BiSupport color="green" size={16} />
                  </span>
                  24/7 Service
                </button>
              </div>
              <div className="learn-btn">
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
