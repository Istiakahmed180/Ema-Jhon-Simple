import React from "react";
import "./Product.css";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product, HandleAddToCart }) => {
  const { img, price, name, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <div className="product-data">
          <p className="product-name">{name.slice(0, 24)}</p>
          <p className="product-price">Price: ${price}</p>
          <small>Manufacturer: {seller}</small>
          <br />
          <small>Rating: {ratings} star</small>
        </div>
        <div className="product-button">
          <button onClick={() => HandleAddToCart(product)}>
            <p>Add to Cart</p> <FaCartPlus></FaCartPlus>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
