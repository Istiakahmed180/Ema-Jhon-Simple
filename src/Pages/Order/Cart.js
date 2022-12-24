import React from "react";
import "./Cart.css";
import { FaRecycle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3 className="order-summary">Order Summary</h3>
      <div className="order-info">
        <p>
          <small>Selected Items: {cart.length}</small>
        </p>
        <p>
          <small>Total Price: ${total}</small>
        </p>
        <p>
          <small>Total Shipping: ${shipping}</small>
        </p>
        <p>
          <small>Tax: ${tax.toFixed(2)}</small>
        </p>
      </div>
      <p className="grand-total">
        Grand Total:{" "}
        <span className="grand-totals">${grandTotal.toFixed(2)}</span>
      </p>

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
