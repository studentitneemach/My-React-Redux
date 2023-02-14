import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Store/counter"
const IncreDecremenet =()=>{
    const counter = useSelector( state => state.counter.counter)
    const isTOggle = useSelector( state => state.counter.isTOggle)
    const dispatch = useDispatch();
    return (
        <div> 
            <h3>Counter</h3>
           
            <span> </span>
            <button onClick={()=>{dispatch(counterAction.decrement())}}><h1>-</h1></button> <span> </span> 
            <button onClick={()=>{dispatch(counterAction.increment())}}><h1>+</h1></button> <span> </span>
            <button onClick={()=>{dispatch(counterAction.incrementByAction(5))}}><h1>+5</h1></button> <span> </span>
            <button onClick={()=>{dispatch(counterAction.toggleButton())}}><h1>^</h1></button> <span>toggle </span>
            {isTOggle && <h1>{counter}</h1>}
        </div>
    )
}
export default IncreDecremenet;