import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "./Cart";
import "./OrderReview.css";
import ReviewProduct from "./ReviewProduct";

const OrderReview = () => {
  const { savedCart } = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    const remainingProduct = cart.filter((product) => product.id !== id);
    setCart(remainingProduct);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="order">
      <div className="review-products">
        {cart.map((product) => (
          <ReviewProduct
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewProduct>
        ))}
        {cart.length === 0 && (
          <h3 style={{ textAlign: "center" }}>
            No Item Here Please Shop Here <Link to="/order">Click</Link>
          </h3>
        )}
      </div>
      <div className="review-cart">
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
