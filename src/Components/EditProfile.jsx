import React,{useState} from 'react'
import "../Style/LoginUser.css"
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch} from 'react-redux'
const LogInUser = () => {
    const dispatch=useDispatch();
    const { loginWithRedirect } = useAuth0();
    const [UserName,setUserName]=useState("");
    const [Phone,setPhone]=useState("");
    const [Address,setAddress]=useState("");
    const [Email,setEmail]=useState("");
    const Submit=()=>{
        dispatch({
            type:"UserData",
            payload:{
                name:UserName,
                phone:Phone,
                address:Address,
                email:Email
            }
        })
        loginWithRedirect()
    }
  return (
   <>
   <div className="Loginuser">
    <form onSubmit={Submit} method="post" className="containerUserLogin">
       <input type="text" value={UserName} onChange={(e)=>{
        setUserName(e.target.value);
       }} placeholder='Enter the Name 'required/>
       <input type="text" value={Phone} onChange={(e)=>{
        setPhone(e.target.value);
       }} placeholder='Enter the Phone No.' required/>
       <input type="text" value={Address} onChange={(e)=>{
        setAddress(e.target.value);
       }}  placeholder='Enter the Address' required/>
       <input type="text" value={Email} onChange={(e)=>{
        setEmail(e.target.value);
       }}  placeholder='Enter the Email' required/>
       <button>Save</button>
    </form>
   </div>
   </>
  )
}

export default LogInUser