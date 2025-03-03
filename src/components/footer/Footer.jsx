import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
          <p>
            Discover a world of delicious dishes prepared with premium
            ingredients. Enjoy every bite! <br />
            Explore our weekly special offers, fresh seasonal items, and chef's
            curated dishes for an unforgettable dining experience.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h4>Get In Touch</h4>
          <ul>
            <li>+233 55 076 5475</li>
            <li>TomatoFoods@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright"> Copyright &copy; ZENith </div>
    </div>
  );
};

export default Footer;
