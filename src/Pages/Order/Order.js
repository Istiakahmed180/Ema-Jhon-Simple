import React, { useEffect, useState } from "react";
import "./Order.css";

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
        <h1>This Is Products:{products.length}</h1>
      </div>
      <div className="cart">
        <h1>This Is Cart</h1>
      </div>
    </div>
  );
};

export default Order;
