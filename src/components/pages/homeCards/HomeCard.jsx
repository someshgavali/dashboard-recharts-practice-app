import React from "react";
import "./HomeCard.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HomeCard = () => {
  return (
    <div className="parrent">
      <h1>Dashboard</h1>
      <div className="cardWrapper">
        <div className="home-page-card">
          <p style={{ color: "grey", marginBottom: "10px" }}>
            Total Page Views 
          </p>
          <div className="home-card-button-info">
            <p style={{ fontSize: "25px" }}>4,42,236</p>
            <button className="home-card-button">
              <ArrowUpwardIcon className="home-page-logo" />
              100%
            </button>
          </div>
          <p>You made an extra 35,000 this year</p>
        </div>
        <div className="home-page-card">
          <p style={{ color: "grey", marginBottom: "10px" }}>
            Total Page Views
          </p>
          <div className="home-card-button-info">
            <p style={{ fontSize: "25px" }}>4,42,236</p>
            <button className="home-card-button">
              <ArrowUpwardIcon className="home-page-logo" />
              100%
            </button>
          </div>
          <p>You made an extra 35,000 this year</p>
        </div>
        <div className="home-page-card">
          <p style={{ color: "grey", marginBottom: "10px" }}>
            Total Page Views
          </p>
          <div className="home-card-button-info">
            <p style={{ fontSize: "25px" }}>4,42,236</p>
            <button className="home-card-button">
              <ArrowDownwardIcon className="home-page-logo" />
              100%
            </button>
          </div>
          <p>You made an extra 35,000 this year</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
