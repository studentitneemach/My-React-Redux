import React from "react";
import './Card.css'
const Card =(props)=>{
 return (
    <section className={`${Card} ${props.className ? props.className : ''} `} >
        {/* className={`${classes.card} ${props.className ? props.className : ''}`} */}
        {props.childern}
    </section>
 )
}
export default Card;