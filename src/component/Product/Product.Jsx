/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, seller, ratings } = props.product;
  return (
    <div className="product_item">
      <img src={img} alt="" />
      <div className="product_data">
        <h4>{name}</h4>
        <p>price : ${price}</p>
        <h5>Manufacturer : {seller} </h5>
        <h5>Rating : {ratings}</h5>
      </div>
      <button className="button"> add to cart </button>
    </div>
  );
};

export default Product;
