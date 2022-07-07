import { useRef } from "react";
import classes from "./Checkout.module.css";

//helper functions
const notEmpty = (value) => value.trim() !== "";
const lenIsValid = (value) => value.trim().length === 5;

function Checkout(props) {
  const formRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = formRef.current.name.value;
    const enteredStreet = formRef.current.street.value;
    const enteredPostalCode = formRef.current.postalCode.value;
    const enteredCity = formRef.current.city.value;

    const enteredNameIsValid = notEmpty(enteredName);
    const enteredStreetIsValid = notEmpty(enteredStreet);
    const enteredPostalCodeIsValid = lenIsValid(enteredPostalCode);
    const enteredCityIsValid = notEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (formIsValid) {
      //submit data
    }
  };

  return (
    <form ref={formRef} className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
