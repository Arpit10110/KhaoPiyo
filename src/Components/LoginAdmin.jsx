import React from 'react'
import { useState,useEffect } from 'react'
import "../Style/LoginAdmin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
const LoginAdmin = () => {
    const Navigate=useNavigate();
    const [Id,setId]=useState("");
    const [Password,setPassword]=useState("");
    const LoginAdmin =(event)=>{
        event.preventDefault()
        if(Id=="Admin" && Password=="admin@321")
        {
                Navigate("/Admin");
        }
        else{
            toast.error('Wrong Input ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                setId("");
                setPassword("");
        }
    }
    useEffect(() => {
        document.title="KhaoPiyo | Admin-Login"
        }, [])
  return (
    <>
    <div className="LoginAdmin">
        <form className="AdminCont" method='post' onSubmit={LoginAdmin}>
            <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }} value={Id} placeholder='Enter the Id' required/>
            <input type="password" onChange={(e)=>{
                setPassword(e.target.value);
            }} value={Password} placeholder='Enter the Password' required/>
            <button>LogIn</button>
        </form>
        <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
    </>
  )
}

export default LoginAdmin