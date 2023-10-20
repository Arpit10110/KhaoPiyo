import React,{useEffect} from 'react'
import CartItem from "./CartItem.jsx" 
import "../Style/cart.css"
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
const Cart = () => {
  const {cartitem} = useSelector(state=>state.cart)
  const {totalAmount} =useSelector(state=>state.cart);
  const {SubTotal} =useSelector(state=>state.cart);
  const {tax} =useSelector(state=>state.cart);
  const {Shipingprice} =useSelector(state=>state.cart); 
  const dispatch = useDispatch();
  const increment=(id)=>{
    dispatch({
        type:"addtocart",
        payload:{id}
    })
    dispatch({
        type:"calculatePrice",
      })
      dispatch({
        type:"storage",
      })
}
  const decrement=(id)=>{
   dispatch({
    type:"decrement",
    payload:{id}
   })
   dispatch({
    type:"calculatePrice",
  })
  dispatch({
    type:"storage",
  })
  }
  const deletehandler=(id)=>{
    dispatch({
        type:"deletehandler",
        payload:{id}
    })
    dispatch({
        type:"calculatePrice",
      })
      dispatch({
        type:"storage",
      })
  }
  useEffect(() => {
   document.title="KhaoPiyo | Cart"
  },[])
  
  return (
    <>
  <div className='cartMain'>
  <div className='cartItem'>
    {
      cartitem.length >0?cartitem.map((i)=>{
          return(
            <CartItem key={i.id} name={i.name} price={i.price} id={i.id} imgsrc={i.imgsrc} qty={i.qty} increment={increment} decrement={decrement} deletehandler={deletehandler}/>
          )
        }) :<h3 className='noitem'>No item in the cart !!!</h3>
    }
  </div>
  <div className='cartCal'>
    <h2>Sub Total ₹{SubTotal}</h2>
    <h2>Shiping price ₹{Shipingprice}</h2>
    <h2>Tax ₹{tax}</h2> 
    <h2>Total Amount ₹{totalAmount}</h2>
    {
      cartitem.length>0? <Link className='chechout' to="/checkout">Checkout</Link>:<span></span>
     
    }
  </div>
  </div>
  </>
  )
}
export default Cart