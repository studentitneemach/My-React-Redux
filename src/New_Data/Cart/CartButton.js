import React from 'react';
import { useDispatch } from 'react-redux';
import  './CartButton.css';
import { uiActions } from '../Store/ui-slice'
const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandle = () =>{
    dispatch(uiActions.toggle())
  }
  return (
<button className="button" onClick={toggleHandle}>
  <span>My Cart</span>
  <span className="badge">1</span>
</button>
  );
};

export default CartButton;