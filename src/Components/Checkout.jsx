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
  const [UserName,setUserName]=useState("");
  const [UserPhone,setUserPhone]=useState("");
  const [UserAddress,setUserAddress]=useState("");
  const {cartitem} = useSelector(state=>state.cart)
  const {cartss} =cartitem
  const CreateCollection=collection(db,"delivery");
  const handleSubmit =(event)=>{
    event.preventDefault()
    checkout();
  }
  const checkout = async()=>{
    console.log(cartss)
    addDoc(CreateCollection,{
      Name:UserName, 
      Phone:UserPhone,
      Address:UserAddress,
      Orders:cartitem
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
       <form method='post' id='myForm' onSubmit={handleSubmit} className='Checkform'>
        <input className='input' value={UserName} onChange={(e)=>{
          setUserName(e.target.value);
        }} type="text" name='Name' placeholder='Enter Your Name'autoComplete='off' required />
        <input className='input' type="text" value={UserPhone} onChange={(e)=>{
          setUserPhone(e.target.value);
        }} name='Phoneno' placeholder='Enter Your Phone no.' autoComplete='off' required />
        <input className='input' type="text"  value={UserAddress} onChange={(e)=>{
          setUserAddress(e.target.value);
        }} name='Address' placeholder='Enter Your Address ' autoComplete='off' required />
        <h5 className='payment'>Payment : Cash On Delivery </h5>
        <button type='submit' className='PTO'>Place the Order</button>
       </form>
    </div>
  )
}

export default Contact;