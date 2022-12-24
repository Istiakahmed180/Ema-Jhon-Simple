import React from "react";
import "./Cart.css";
import { FaRecycle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3 className="order-summary">Order Summary</h3>
      <div className="order-info">
        <p>
          <small>Selected Items: {cart.length}</small>
        </p>
        <p>
          <small>Total Price: $ 0</small>
        </p>
        <p>
          <small>Total Shipping Charge: $ 0</small>
        </p>
        <p>
          <small>Tax: $ 0</small>
        </p>
      </div>
      <p className="grand-total">Grand Total: $ 0</p>

      <div className="cart-button1">
        <button>
          <span>Clear Cart</span> <FaRecycle></FaRecycle>
        </button>
      </div>
      <div className="cart-button2">
        <button>
          <span>Review Order</span> <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Cart;
