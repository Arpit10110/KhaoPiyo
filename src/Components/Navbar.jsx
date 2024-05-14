import React,{useEffect} from 'react' 
import { Link } from 'react-router-dom'
import "../Style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import {BiCart} from"react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {useSelector} from "react-redux"
const Navbar = () => {
  const {cartitem} = useSelector(state=>state.cart);
  const {UserLogin} = useSelector(state=>state.cart);
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;" 
    main.style="display:flex;"
  }
  function closefun(){

    if (window.innerWidth <= 600) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <Link to="/"><h4 className='logoName'>Khao Piyo<span>🧑‍🍳</span></h4></Link>
        <main className='main'> 
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/menu/pizza">Menu</Link>
            {
              UserLogin==1?<Link onClick={closefun} className='nava'  to="/MyOrder">MyOrder</Link>:<span/>
            }
            <Link onClick={closefun} className='nava'  to="/Cart"><BiCart className='carticon'/><span className='cartval'>{cartitem.length}</span></Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
            {
              UserLogin==1?<Link onClick={closefun} className='nava' to='/profile'><AiOutlineUser  className='Profile'/></Link>:<Link onClick={closefun}  className='nava' to='/Login'>Login</Link>   
            }
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar