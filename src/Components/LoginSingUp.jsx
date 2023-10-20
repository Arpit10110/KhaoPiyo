import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "../Style/LoginSingUp.css";
import {Link} from "react-router-dom"
const LoginSingUp = () => {
    const { loginWithRedirect } = useAuth0();
    useEffect(() => {
    document.title="KhaoPiyo | Login"
    }, [])
    
  return (
   <>
   <div className="LoginSingUp">
    <div className="cont">
        <Link onClick={() => loginWithRedirect()}>Login as User </Link>
        <Link to="/LoginAdmin">Login as Admin</Link>
    </div>
   </div>
   </>
  )
}

export default LoginSingUp