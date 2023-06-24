/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Side.css';

const Side = (props) => {

    return (
        <div className='order_data'>
            <h3>Selected Items : {props.total.length} </h3>
            <h3>Total Price :</h3>
            <h3>Total Shipping Charge :</h3>
            <h3>Tax :</h3>
            <h2>Grand Total :</h2>
            <button className='button_order red'>Clear Cart</button> <br/> <br/>
            <button className='button_order yellow'>Review Order</button>
        </div>
    );
};

export default Side;