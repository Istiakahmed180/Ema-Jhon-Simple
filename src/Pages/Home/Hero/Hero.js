import React from "react";
import "./Hero.css";
import hero from "../../../images/giphy.gif";

const Hero = () => {
  return (
    <div className="hero-parent">
      <div className="left-side">
        <p className="sale">Sale up to 70% off</p>
        <h1>New Collection For Fall</h1>
        <p className="discover">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <button>SHOP NOW</button>
      </div>
      <div className="right-side">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
