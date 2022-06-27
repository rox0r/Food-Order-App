import React from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";

function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", price: "12.99", quantity: "2" }].map(
        (item) => {
          return <li>{item.name}</li>;
        }
      )}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
