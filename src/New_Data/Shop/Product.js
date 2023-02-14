import React from "react";
import ProductItem from './ProductItem';
import "./Product.css";
const Product =() =>{
    return (
        <section className="products">
<h2>Buy Your Favoraite Product</h2>
<ul>
    <ProductItem 
    title="Title" 
    price = {6}
    descrption = "This is a first product - amazing!"
    />
</ul>
        </section>
    )
}
export default Product;
////   const {title,price,descrption} = props;