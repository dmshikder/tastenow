import React from "react";
import food from '../../Assets/images/Food.png';
import splash_food from '../../Assets/images/splash_food.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-description">
          <h2 className="hero-title">Experience food <span>Delivery</span> like no other</h2>
          <p className="hero-text">
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>
        <div className="hero-image">
          <img className="food-image" src={food} alt="" />
          <img className="splash-food" src={splash_food} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
