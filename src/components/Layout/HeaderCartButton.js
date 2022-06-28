import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [animateBtn, setAnimateBtn] = useState(false);

  let btnClasses = `${classes.button} ${animateBtn && classes.bump}`;

  useEffect(() => {
    setAnimateBtn(true);

    const timer = setTimeout(() => {
      setAnimateBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.totalAmount]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
}

export default HeaderCartButton;
