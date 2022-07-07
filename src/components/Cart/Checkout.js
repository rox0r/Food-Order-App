import React, { useRef } from "react";

import classes from "./Checkout.module.css";

function Checkout(props) {
  const checkoutRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target.name.value);
  }

  return (
    <form ref={checkoutRef} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" />
      </div>
      <div>
        <label htmlFor="pincode">Pincode</label>
        <input id="pincode" type="text" />
      </div>
      <button type="button" onClick={props.cancelCheckout}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}

export default Checkout;
