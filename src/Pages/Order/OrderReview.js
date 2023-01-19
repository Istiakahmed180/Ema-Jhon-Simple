import React from "react";
import { useLoaderData } from "react-router-dom";
import "./OrderReview.css";

const OrderReview = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>Order Review Comming Soon: {products.length}</h1>
    </div>
  );
};

export default OrderReview;
