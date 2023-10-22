import React from 'react'
import {pizzaapi} from "./PizzaApi";
import Menucard from "./MenuCard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'
const Pizza = () => {
  const dispatch = useDispatch();
  const addtocart=(option)=>{
    dispatch({
      type:"addtocart",
      payload:option
    })
    dispatch({
      type:"calculatePrice",
    })
    dispatch({
      type:"storage",
    })
    toast.success('Add to cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
  <>
  <div className="pizzmenu">
    {
      pizzaapi.map((i)=>{
        return(
          <Menucard key={i.id} id={i.id} name={i.name} price={i.Price} imgsrc={i.imgsrc}  handler={addtocart}/>
        )
      })
    }
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

export default Pizza
