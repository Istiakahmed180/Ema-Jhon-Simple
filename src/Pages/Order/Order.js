import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import Cart from "./Cart";
import "./Order.css";
import Product from "./Product";

const Order = () => {
  const [cart, setCart] = useState([]);
  const { products, savedCart } = useLoaderData();

  const HandleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exits = cart.find((product) => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exits.quantity = exits.quantity + 1;
      newCart = [...rest, exits];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  useEffect(() => {
    setCart(savedCart);
  }, []);

  return (
    <div className="order">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            HandleAddToCart={HandleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
