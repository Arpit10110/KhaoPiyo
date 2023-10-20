import React from 'react'
import {AiFillDelete}from "react-icons/ai"
import "../Style/cartitem.css"
const CartItem = ({name , price ,qty ,imgsrc , id ,increment , decrement ,deletehandler}) => {
  return (
    <>
    <div className='cartCard'>
        <img className='cartitemImg' src={imgsrc} alt="" />
        <div className='cart-item-detal'>
            <h4>{name}</h4>
            <h4>₹{price}</h4>
        </div>
        <div className='cartUpdate'>
            <button className='cartudatebtn' onClick={()=>increment(id)}>+</button>
            <p className='cartQty'>{qty}</p>
            <button className='cartudatebtn' onClick={()=>decrement(id)}>-</button>
        </div> 
        <AiFillDelete onClick={()=>deletehandler(id)} className='cart-item-del'/>
    </div>
    </>
  )
}

export default CartItem