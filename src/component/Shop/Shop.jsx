/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import Product from "../Product/Product.Jsx";
import Side from "../Side/Side.jsx";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop_container">
        
      <div className="product_area">
        
        <div className="product_container">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
        
      </div>

      <div className="product_order">
        <h5>Order Summary</h5>
        <Side></Side>
      </div>
      
    </div>
  );
};

export default Shop;
