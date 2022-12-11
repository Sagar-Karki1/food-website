import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Populardishes from "./Populardishes";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Populardishes />
    </>
  );
};

export default Home;
