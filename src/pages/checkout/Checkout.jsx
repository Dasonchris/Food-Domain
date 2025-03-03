import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Checkout.css";

const Checkout = () => {
  const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const subtotal = getTotalCartAmount();
  const deliveryCharge = subtotal > 0 ? 10 : 0;
  const total = subtotal + deliveryCharge;

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <hr />
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>GHc {subtotal}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Charges</p>
            <p>GHc {deliveryCharge}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>GHc {total}</p>
          </div>
          <hr />
          <button type="submit" className="submit-button">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
