import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const inputParams = {
    id: "Quantity_" + props.mealId,
    type: "number",
    value: "1",
    min: "1",
    max: "10",
    step: "1",
  };

  return (
    <form className={classes.form}>
      <Input label="Quantity" input={inputParams} />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
