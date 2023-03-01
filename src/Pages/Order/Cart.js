import React from "react";
import "./Cart.css";
import { FaRecycle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleClearCart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3 className="order-summary">Order Summary</h3>
      <div className="order-info">
        <p>
          <small>Selected Items: {quantity}</small>
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
        <button onClick={handleClearCart}>
          <span>Clear Cart</span> <FaRecycle></FaRecycle>
        </button>
      </div>
      <div className="cart-button2">
        <Link to="/shipping">
          <button>
            <span>Proceed Shipping</span> <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
