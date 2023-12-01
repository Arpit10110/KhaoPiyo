import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{Link} from "react-router-dom"
import "../Style/Profile.css"
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { logout } = useAuth0();
    const dispatch=useDispatch();
    const {UserName} = useSelector(state=>state.cart);
    const {Phone} = useSelector(state=>state.cart);
    const {Address} = useSelector(state=>state.cart);
    const {Email} = useSelector(state=>state.cart);
    useEffect(() => {
        document.title = 'KhaoPiyo | Profile';
    }, []);
    
    const Logout =()=>{
        dispatch({
            type:"LogOut"
        })
        logout({ logoutParams: { returnTo: window.location.origin } })
    }
  return (
    <>
    <div className="ProfileDiv">
        <div className="ProfileCont">
            <h4>Name : {UserName}</h4>
            <h4>Phone NO : {Phone}</h4>
            <h4>Address : {Address}</h4>
            <h4>Email : {Email}</h4>
            <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
            <div className="profilebtns">
                <Link to="/editProfile">Edit Profile🖊️</Link>
                <Link onClick={Logout}>Log Out</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile