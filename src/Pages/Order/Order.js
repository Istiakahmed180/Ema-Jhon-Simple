import React, { useEffect, useState } from "react";
import "./Order.css";
import Product from "./Product";

const Order = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="order">
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart">
        <h1>This Is Cart</h1>
      </div>
    </div>
  );
};

export default Order;
