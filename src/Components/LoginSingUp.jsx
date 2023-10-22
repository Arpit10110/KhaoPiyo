import React, { useEffect } from 'react'
import "../Style/LoginSingUp.css";
import {Link} from "react-router-dom"
const LoginSingUp = () => {
    useEffect(() => {
    document.title="KhaoPiyo | Login"
    }, [])
    
  return (
   <>
   <div className="LoginSingUp">
    <div className="cont">
        <Link to="/LogInUser">Login as User </Link>
        <Link to="/LoginAdmin">Login as Admin</Link>
    </div>
   </div>
   </>
  )
}

export default LoginSingUp