import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "./About";
import Menu from "./Menu";
import Populardishes from "./Populardishes";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Populardishes />
      <About />
      <Menu />
    </>
  );
};

export default Home;
