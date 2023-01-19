import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import "./OrderReview.css";

const OrderReview = () => {
  const { products, savedCart } = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  console.log(cart);
  return (
    <div className="order">
      <div className="products"></div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
