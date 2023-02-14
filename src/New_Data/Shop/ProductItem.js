import React from "react";
import Card from "../UI/Card";
import './ProductItem.css';
const ProductItem =(props)=>{
    const {title,price,descrption} = props;
    return (
    <li className="item">
        <Card>
        <header>
        <h3>{title}</h3>
        <div className="price"> ${price.toFixed(2)}</div>
        </header>
        <p>{descrption}</p>
        <div className="actions">Add TO Cart</div>
        </Card>
    </li>
    )   
}
export default ProductItem