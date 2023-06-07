import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import HomeCard from "../homeCards/HomeCard";
import HomeGraph from "../homeGraph/HomeGraph";
const Home = () => {
  return (
    <div className="homePageWrapper">
      <Navbar />
      <HomeCard />
      <HomeGraph/>
    </div>
  );
};

export default Home;
