import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  function submitHander(event) {
    event.preventDefault();
    const enteredQuantityString = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantityString;

    // Validity Check
    if (
      enteredQuantityString.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 10
    ) {
      setQuantityIsValid(false);
      return;
    }
    //When entered Quantity is valid
    props.onAddToCart(enteredQuantityNumber);
  }

  const inputParams = {
    id: "Quantity_" + props.mealId,
    type: "number",
    min: "1",
    max: "10",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes.form} onSubmit={submitHander}>
      <Input ref={quantityInputRef} label="Quantity" input={inputParams} />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please Enter a valid quantity between (1-10).</p>}
    </form>
  );
}

export default MealItemForm;
