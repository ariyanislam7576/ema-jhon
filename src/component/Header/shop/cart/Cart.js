import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const {cart} = props;
    let Total = 0
    for(const product of cart){
        Total = Total + product.price
    }
    const tax = Total * 0.10
    const grandTotal = Total + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <h3>Item odered {props.cart.length} </h3>
            <p>shipping and handling </p>
            <p>Total before tax ${Total.toFixed(2)}</p>
            <p>Estimated text ${tax.toFixed(2)} </p>
            <h3>Order Total ${grandTotal.toFixed(2)}</h3>
            <button>Review your Order</button>
        </div>
    );
};

export default Cart;