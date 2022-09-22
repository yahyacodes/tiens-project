import React, { useState } from "react";

import classes from "./Navigation.module.css";
import image from "../images/tiens-logo-no-name-removebg-preview.png";

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
  };

  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.menubar} onClick={showNavbarHandler}></div>
        <div className={classes.menubar1} onClick={showNavbarHandler}></div>
        <div className={classes.menubar2} onClick={showNavbarHandler}></div>
        {showNavbar && (
          <div className={classes.closeNav}>
            <span>X</span>
          </div>
        )}
        <img src={image} alt="" className={classes.image} />
        <label htmlFor="logo" className={classes.logo}>
          Tiens
        </label>
        {!showNavbar && (
          <ul className={classes.nav}>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
