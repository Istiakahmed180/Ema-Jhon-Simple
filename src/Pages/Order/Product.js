import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, price, name, ratings } = product;
  return (
    <div className="product">
      <h1>This Is Product</h1>
    </div>
  );
};

export default Product;
