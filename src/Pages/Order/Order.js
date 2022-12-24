import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "./Cart";
import "./Order.css";
import Product from "./Product";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const HandleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
