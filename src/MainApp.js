import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const MainApp = () => {
   const dispatch =  useDispatch();

    const counter = useSelector(state => state.counter);
    //   console.log(counter)
    const incrementHandle =() =>{ 
        dispatch({type : 'increment'})
    } ;
    const decrementHandle =() =>{
        dispatch({type : 'decrement'})
    } ;

    return (
        <div className="App-header">
            <h4>Redux </h4>
            <div>
                <span>Increment</span><button style={{background: 'yellowgreen'}} onClick={incrementHandle}><h1>+</h1></button>
                <span></span> <span>{counter}</span>          <span></span>
                <button style={{background: 'yellowgreen'}} onClick={decrementHandle}><h1>-</h1></button> <span>Decrement</span>
            </div>
        </div>
    )
}
export default MainApp;