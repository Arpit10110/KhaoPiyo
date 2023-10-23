import React,{useState} from 'react'
import "../Style/Chekout.css"
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux"
import { db } from '../FirebaseConfig';
import {addDoc,collection} from "firebase/firestore"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
const Contact = () => {
  const dispatch=useDispatch();
  const Navigate=useNavigate()
  const {UserName} = useSelector(state=>state.cart);
  const {Phone} = useSelector(state=>state.cart);
  const {Address} = useSelector(state=>state.cart);
  const {cartitem} = useSelector(state=>state.cart)
  const {totalAmount} = useSelector(state=>state.cart)
  const {cartss} =cartitem
  const CreateCollection=collection(db,"delivery");
  const checkout = async()=>{
    console.log(cartss)
    addDoc(CreateCollection,{ 
      Name:UserName, 
      Phone:Phone,
      Address:Address,
      Orders:cartitem,
      TotalAmount:totalAmount
    })
    dispatch({
      type:"delleteall"
    })
    dispatch({
      type:"calculatePrice",
    })
    dispatch({
      type:"storage",
    })
    Navigate("/orderPlaced")
  }
  return (
    <div className='CheckoutDiv' >
       <div className='Checkform'>
       <h4>Name : {UserName}</h4>
      <h4>Phone NO : {Phone}</h4>
      <h4>Address : {Address}</h4>
        <h5 className='payment'>Payment : Cash On Delivery </h5>
        <button onClick={checkout} className='PTO'>Place the Order</button>
       </div>
    </div>
  )
}

export default Contact;