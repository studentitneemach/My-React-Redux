import React from "react";
import { useSelector } from "react-redux";
import Layout from './Layout/Layout';
import Cart from './Cart/cart';
import Product from './Shop/Product';
import CartItem from "./Cart/CartItem";
const App =()=>{
  const showCart =   useSelector((state) => state.ui.cartIsVisible)
    return  (
        // <Layout>
        //     {/* { showCart &&  <Cart />} */}
        //     <Product />
        // </Layout>
<CartItem />
    )
} 
export default App;