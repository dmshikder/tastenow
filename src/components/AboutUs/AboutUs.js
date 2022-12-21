import React from "react";
import environment from '../../Assets/images/enviroment.png';
import teamwork from '../../Assets/images/teamwork.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <h2 className="aboutUs-title">Get to know <span className="span">us</span></h2>
      <div className="about-us">
        <div>
          <img src={teamwork} alt="" />
        </div>
        <div>
          <h3 className="sub-title"><span className="span">Teamwork</span> is the key to our sucess</h3>
          <p>
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone's opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
      <div className="about-us">
      <div>
          <h3 className="sub-title">We are all in for the <span className="span ">enviroment</span></h3>
          <p>
          TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone's help, we can make a better world. 
          </p>
        </div>
        <div>
          <img src={environment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
