import React from "react";
import Facebook from "../../Assets/SVG/Facebook";
import Instagram from "../../Assets/SVG/Instagram";
import Twitter from "../../Assets/SVG/Twitter";
import Youtube from "../../Assets/SVG/Youtube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col-1">
        <div>
          <p className="logo-footer">Taste now</p>
        </div>
        <div className="social-link">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className="footer-menu">
        <div>
          <p>Seslendirme ve Alt Jazz</p>
          <p>Media Market</p>
          <p>Gillie</p>
          <p>Size Last</p>
        </div>
        <div>
          <p>Self Betimes</p>
          <p>Yatirmci iliskileri</p>
          <p>Basal Himmler </p>
        </div>
        <div>
          <p>Yard Market</p>
          <p>Is imkanlari</p>
          <p>Car Tercihleri</p>
        </div>
        <div>
          <p>Hedge Karla</p>
          <p>Mullein Kosullari</p>
          <p>Autumnal Bulgier</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
