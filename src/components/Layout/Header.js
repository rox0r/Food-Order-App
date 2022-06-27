import React from "react";

import imgMeals from "../../assets/Images/meals.jpg";

import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button></button>
      </header>
      <div className={classes["main-image"]}>
        <img src={imgMeals} alt="Table full of delicious meals!" />
      </div>
    </>
  );
}
export default Header;
