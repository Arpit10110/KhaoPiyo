import React,{useEffect,useState} from 'react'
import {useLocation} from "react-router-dom"
const ShowNav = ({children}) => {
    const [shownavbar,setshownavbar]=useState(false);
    const Loaction=useLocation();
    useEffect(() => {
     if(Loaction.pathname === "/Admin")
     {
        setshownavbar(false);
     }
     else{
        setshownavbar(true);
     }
    }, [Loaction])
    
  return (
    <div>{shownavbar && children}</div>
  )
}

export default ShowNav