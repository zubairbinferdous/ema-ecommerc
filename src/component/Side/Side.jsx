/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Side.css';

const Side = ({total}) => {

    let price = 0 ;
    let shipping = 0 ;
    for (const ProductPrice of total) {
        price = price + ProductPrice.price
        shipping = shipping + ProductPrice.shipping;
    }

    let tax = price * 0.07;
    let total_price = price + shipping + tax ;

    return (
        <div className='order_data'>
            <h5 className='center'>Order Summary</h5>
            <h3>Selected Items : {total.length} </h3>
            <h3>Total Price : ${price}</h3>
            <h3>Total Shipping Charge : ${shipping}</h3>
            <h3>Tax : {tax.toFixed(2)}</h3>
            <h2>Grand Total : {total_price.toFixed(2)}</h2>
            <button className='button_order red'>Clear Cart</button> <br/> <br/>
            <button className='button_order yellow'>Review Order</button>
        </div>
    );
};

export default Side;