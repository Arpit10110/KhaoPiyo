import React from 'react'
import "../Style/Menucard.css"
const TshirtCard = ({imgsrc, name,price,id,handler}) => {
  return (
    <div className='productCard'>
    <img className='productimg' alt={name} src={imgsrc}  />
    <h3>{name}</h3>
    <h4>₹{price}</h4>
    <button className='addtocartbtn' onClick={()=>{handler({name , id ,price,imgsrc,qty:1 })}}>Add to Cart</button>
   </div>
  )
}

export default TshirtCard