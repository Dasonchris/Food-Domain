import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"



function Navbar() {
   const getCartItemCount = () => {
     let count = 0;
     for (const item in CartItems) {
       if (CartItems[item] > 0) {
         count += CartItems[item];
       }
     }
     return count;
   };

   const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
      useContext(StoreContext);

  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {/* Link component from react-router-dom to navigate to the home page */}
        <Link
          to="/" // Specifies the target route as the home page
          onClick={() => setMenu("home")} // Sets the menu state to "home" when clicked
          className={menu === "home" ? "active" : ""} // Applies the "active" class if the current menu state is "home"
        >
          Home
        </Link>
        <Link
          to="#explore-menu" // Specifies the target route as the home page
          onClick={() => setMenu("menu")} // Sets the menu state to "home" when clicked
          className={menu === "menu" ? "active" : ""} // Applies the "active" class if the current menu state is "home"
        >
          Menu
        </Link>
        <Link
          to="#app-download" // Specifies the target route as the home page
          onClick={() => setMenu("mobile-app")} // Sets the menu state to "home" when clicked
          className={menu === "mobile-app" ? "active" : ""} // Applies the "active" class if the current menu state is "home"
        >
          Mobile App
        </Link>
        <Link
          to="#footer" // Specifies the target route as the home page
          onClick={() => setMenu("contact-us")} // Sets the menu state to "home" when clicked
          className={menu === "contact-us" ? "active" : ""} // Applies the "active" class if the current menu state is "home"
        >
          Contact Us
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot">
            {getCartItemCount() > 0 && (
              <span className="cart-count">{getCartItemCount()}</span>
            )}
          </div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar; 