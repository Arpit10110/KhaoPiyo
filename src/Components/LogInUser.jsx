import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "../Style/LoginUser.css"
import {auth} from "../FirebaseConfig"
import {RecaptchaVerifier,signInWithPhoneNumber  } from 'firebase/auth';
import {useDispatch} from 'react-redux'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useNavigate} from "react-router-dom"
const LogInUser = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const [UserName,setUserName]=useState("");
    const [Otp,setOtp]=useState();
    const [Phone,setPhone]=useState();
    const [Address,setAddress]=useState("");
    const [Email,setEmail]=useState("");
    // Gentrating Capture
    const gencap =()=>{
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recapCont', {
            'size': 'visible',
            'callback': (response) => {
            }
          });
    }
    // Otp Submission
    const subotp=(event)=>{
        event.preventDefault();
        console.log(Otp)
        let confirmationResult= window.confirmationResult;
        confirmationResult.confirm(Otp).then((result) => {
         setOtp();
         Sucss();
       }).catch((error) => {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
       });
       }


    const Sucss=()=>{
        dispatch({
            type:"UserData",
            payload:{
                name:UserName,
                phone:Phone,
                address:Address,
                email:Email
            }
        })
        Navigate("/")
    }
    const Captcha =(event)=>{
        event.preventDefault();
        gencap();
        let appVerifier =  window.recaptchaVerifier;
        signInWithPhoneNumber(auth, Phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          toast.success('Otp Send..', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          document.querySelector("#recapCont").style="display:none"
          document.querySelector("#Otpdiv").style="display:flex"
        }).catch((error) => {
            setPhone();
            toast.error(error.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
    }
  return (
   <>
   <div className="Loginuser">
    <form onSubmit={subotp} method="post" className="containerUserLogin">
       <input type="text" value={UserName} onChange={(e)=>{
        setUserName(e.target.value);
       }} placeholder='Enter the Name' required/>
    <PhoneInput  defaultCountry="IN" value={Phone} onChange={setPhone} placeholder='Enter the Phone No.' required/>
       <input type="text" value={Address} onChange={(e)=>{
        setAddress(e.target.value);
       }}  placeholder='Enter the Address' required/>
       <input type="text" value={Email} onChange={(e)=>{
        setEmail(e.target.value);
       }}  placeholder='Enter the Email' required/>
       <button onClick={Captcha}>Submit</button>
       <div id="recapCont"></div>
       <div id="Otpdiv">
       <input type="text" value={Otp} onChange={(e)=>{
        setOtp(e.target.value);
       }} placeholder='Enter the Otp 'required/>
       <button>Submit Otp</button>
       </div>
    </form>
   </div>
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
   </>
  )
}

export default LogInUser