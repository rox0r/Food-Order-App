import { useContext, useState } from "react";
import React from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CardItem from "./CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function Cart(props) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, quantity: 1 });
  }

  function orderHandler() {
    setIsCheckingOut(true);
  }

  function cancelCheckoutHandler() {
    setIsCheckingOut(false);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CardItem
            key={item.id}
            item={item}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            //Bind pre-configures the func - so it will set once it gets value
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && <Checkout cancelCheckout={cancelCheckoutHandler} />}
      {!isCheckingOut && modalActions}
    </Modal>
  );
}

export default Cart;
