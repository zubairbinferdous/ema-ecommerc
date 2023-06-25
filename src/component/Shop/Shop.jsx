/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from '../../utilities/fakedb.js';

import Product from "../Product/Product.Jsx";
import Side from "../Side/Side.jsx";
import "./Shop.css";

const Shop = () => {

  const [products, setProducts] = useState([]);
  
  const [cart , setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {

    const storageCart = getShoppingCart();
    console.log(storageCart);

  } ,[])

  const addToCart = (ProductData) => {
    const newCart = [...cart , ProductData]
    setCart(newCart);
    addToDb(ProductData.id)
  } 

  return (
    <div className="shop_container">
        
      <div className="product_area">
        
        <div className="product_container">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart}></Product>
          ))}
        </div>
        
      </div>

      <div className="product_order">
        <Side total={cart}></Side>
      </div>
      
    </div>
  );
};

export default Shop;
