import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/images/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="Logo" />
        </Link>
        <Link to="/">
          <ul className="navbar-menu">
            <li
              onClick={() => setMenu("home")}
              className={menu == "home" ? "active" : ""}
            >
              home
            </li>
            <li
              onClick={() => setMenu("menu")}
              className={menu == "menu" ? "active" : ""}
            >
              menu
            </li>
            <li
              onClick={() => setMenu("mobile-app")}
              className={menu == "mobile-app" ? "active" : ""}
            >
              mobile-app
            </li>
            <li
              onClick={() => setMenu("contact-us")}
              className={menu == "contact-us" ? "active" : ""}
            >
              contact us
            </li>
          </ul>
        </Link>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search_icon" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="basket_icon" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </>
  );
}
