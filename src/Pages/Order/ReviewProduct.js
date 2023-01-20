import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./ReviewProduct.css";

const ReviewProduct = ({ product, handleRemoveCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review">
      <img src={img} alt="" />
      <div className="">
        <div>
          <h4>{name}</h4>
          <p>
            Price: <span className="price">${price}</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
        <button onClick={() => handleRemoveCart(id)} className="icon-btn">
          <FaRegTrashAlt className="delete-icon"></FaRegTrashAlt>
        </button>
      </div>
    </div>
  );
};

export default ReviewProduct;
