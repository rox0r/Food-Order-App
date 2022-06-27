import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler(quantity) {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      quantity: quantity,
      price: meal.price,
    });
  }

  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm mealId={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
