import React from 'react';
import CartButton from '../Cart/CartButton';
import './MainHeader.css'
const MainHeader=(props)=>{
    return (
        <header className="header">
            <h1>Redux Cart</h1>
            <nav>
                <ul>
                    <li><CartButton /> </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainHeader;