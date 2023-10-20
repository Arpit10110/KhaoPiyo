import React,{useEffect} from 'react'
import {Link, Outlet} from "react-router-dom";
import "../Style/menunav.css"
const Menunav = () => {
  useEffect(() => {
    document.title="KhaoPiyo | Menu"
  }, [])
  return (
    <>
    <div className="mendiv">
        <div className="menulinks">
            <Link to='/menu/pizza'>Pizza</Link>
            <Link  to='/menu/burger'>Burger</Link>
            <Link  to='/menu/cake'>Cake</Link>
        </div>
        <Outlet/>
    </div>
    </>
  )
}

export default Menunav