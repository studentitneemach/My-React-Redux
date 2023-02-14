import React from 'react';
import  './CartItem.css';
const CartItem = ({item}) => {
    const { title  , quantity, total, price } = item;
    return (
        <li className="item">
            <header>
                <h3>{title} </h3>
                <div className="price">
                ${total}       {/* ${total.toFixed(2)}{' '}  (${price.toFixed(2)}/item) */}
                    <span className="itemprice">  ${price}</span>
                </div>
            </header>
            <div className="details">
                <div className="quantity">
                    x <span>{quantity}</span>
                </div>
                <div  className="actions">
                    <span>-</span>
                    <span>+</span>
                </div>
            </div>
        </li>
    )
}
export default CartItem ;