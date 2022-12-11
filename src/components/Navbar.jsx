import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import {
  FaAddressCard,
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUtensils,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navLinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Dishes",
    },
    {
      id: 3,
      link: "Menu",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Review",
    },
    {
      id: 6,
      link: "Order",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-links">
            <div className="logo">
              <FaUtensils color="green" size={20} />
              <h1>Restro</h1>
            </div>
            <div className="nav-menu">
              <ul>
                {navLinks.map(({ id, link }) => (
                  <li key={id}>
                    <Link to={link} smooth duration={500}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cart-links">
            <div className="mobile-menu" onClick={() => setNav(!nav)}>
              {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
            </div>
            {nav && (
              <ul className="mobile-lists">
                {navLinks.map(({ id, link }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth
                      duration={500}
                      onClick={() => setNav(!nav)}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="icons-list">
              <ul>
                <li>
                  <FaHeart className="icons" />
                </li>
                <li>
                  <FaShoppingCart className="icons" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
