import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import "../Style/footer.css"
const footer = () => {
  return (
    <>
    <div className="footerdiv">
        <div className="dev">
        <span>Developer-Vyom Gupta</span><br />
        <a href="mailto:omagrahri55@gmail">E-mail-Vyom.gupta16feb@gmail</a><br />
        {/* <a href="tel:+918840689883">Phone-8840689883</a><br /> */}
        <span>Location-Delhi,India</span><br />
        </div>
        <div className="end">
        Copyright © www.KhaoPiyo.com all rights are reserved!!!
        </div>
        {/* <div className="social">
        <AiFillFacebook className='scoialImg'/><span className='scoialWord'>Facebook</span><br />
        <AiFillLinkedin className='scoialImg'/><span className='scoialWord'>Linkedin</span><br />
        <AiFillInstagram className='scoialImg'/><span className='scoialWord'>Instagram</span><br />
        </div> */}
    </div>
    </>
  )
}
export default footer