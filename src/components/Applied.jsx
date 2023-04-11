import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const jobdata= useLoaderData();
    let shoppingCart = {};
    const getShoppingCart = () => {
       
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        return shoppingCart;
    }
    getShoppingCart();
    return (
        <div>
            <h1>{shoppingCart.jobname}</h1>
        </div>
    );
};

export default Applied;