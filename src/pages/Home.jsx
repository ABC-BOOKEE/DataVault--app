// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureBlock from "../components/ControlDataSection";
import ShareFiles from "../components/ShareFiles"

const Home = () => {
  return (
    <div className="main-bg">
      <div className="app">
        <Navbar />
        <Hero />
        <FeatureBlock />
        <ShareFiles />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
