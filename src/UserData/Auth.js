import React from "react";
import { useDispatch } from "react-redux";
import {authenticActions} from '../Store/authentic';

const Auth =()=>{
    const dispatch = useDispatch();

    const logginHandle=(event)=>{
        event.preventDefault();
        dispatch(authenticActions.login())
    }
    return (
        <section>
            <form onSubmit={logginHandle}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' />
                </div>
                <button >Login</button>
            </form>
        </section>
    )
}
export default Auth;