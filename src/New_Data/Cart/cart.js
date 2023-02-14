import React from "react";
import './Cart.css';
import Card from '../UI/Card';
import CartItem from './CartItem';
// import CartButton from "./CartButton";
const Cart =()=>{
    return (
        <Card className = "cart">
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItem 
                item ={ {title:  'Test Item',quantity: 3 , total : 18 , price : 6 }} />
            </ul>
           
        </Card> 
    )
}
export default Cart;