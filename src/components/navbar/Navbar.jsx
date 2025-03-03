import { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const getCartItemCount = () => {
    let count = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        count += CartItems[item];
      }
    }
    return count;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="navbar-mobile-header">
        <Link to="/">
          <img
            src={assets.logo || "/placeholder.svg"}
            alt=""
            className="logo"
          />
        </Link>
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "show" : ""}`}>
        <Link
          to="/"
          onClick={() => {
              document
                .getElementById("header")
                ?.scrollIntoView({ behavior: "smooth" });
            setMenu("home");
            setMobileMenuOpen(false);
          }}
          className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/"
          onClick={() => {
            setMenu("menu");
            setMobileMenuOpen(false);
            document
              .getElementById("explore-menu")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={menu === "menu" ? "active" : ""}>
          Menu
        </Link>
        <Link
          to="/"
          onClick={() => {
            setMenu("mobile-app");
            document
              .getElementById("app-download")
              ?.scrollIntoView({ behavior: "smooth" });
            setMenu("mobile-app");
            setMobileMenuOpen(false);
          }}
          className={menu === "mobile-app" ? "active" : ""}>
          Mobile App
        </Link>
        <Link
          to="#footer"
          onClick={() => {
            document
              .getElementById("footer")
              ?.scrollIntoView({ behavior: "smooth" });
            setMenu("contact-us");
            setMobileMenuOpen(false);
          }}
          className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </Link>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon || "/placeholder.svg"}
          alt=""
          className="search-icon"
        />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon || "/placeholder.svg"} alt="" />
          </Link>
          <div className="dot">
            {getCartItemCount() > 0 && (
              <span className="cart-count">{getCartItemCount()}</span>
            )}
          </div>
        </div>
        <span className="theme-toggle" onClick={toggleDarkMode}>
          <img
            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            alt={isDarkMode ? "Light mode" : "Dark mode"}
          />
        </span>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
      <div className="mobile-toggle" onClick={toggleMobileMenu}>
        <img
          src={assets.menu_icon || "/placeholder.svg"}
          alt="menu"
          className="hamburger"
        />
      </div>
    </div>
  );
}

export default Navbar;
