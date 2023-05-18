// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureBlock from "../components/ControlDataSection";
import ShareFiles from "../components/ShareFiles"
// import Plans from "../components/Plans"

const Home = () => {
  return (
    <div className="main-bg">
      <div className="app">
        <Navbar />
        <Hero />
        <FeatureBlock />
        <ShareFiles />
        {/* <Plans /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;