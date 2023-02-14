import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {authenticActions} from '../Store/authentic';
export const Header =()=>{
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authentication.isAuthenticed);
    const logoutHandle =()=>{
        dispatch(authenticActions.logout());
    }
    return (
        <header>
            <h3>Redux</h3>
        { isAuth && (
        <nav>
            <a href="/">My Sales</a> 
            <a href="/">My Product</a>
            <br />
            <button onClick={logoutHandle}>LogOut</button>
        </nav>
        )}
        </header>
    )
}