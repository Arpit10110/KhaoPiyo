import React, { useEffect } from 'react'
//importing img
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"
import banner4 from "../assets/banner4.jpg"
import banner5 from "../assets/banner5.png"
import pizzaintro from "../assets/pizzaintro.png"
import burgerintro from "../assets/burgerintro.png"
import cakeintro from "../assets/cakeintro.png" 
import PizzaVideo from "../assets/PizzaVideo.webm"
import BurgerVideo from "../assets/burgerVideo.webm"
import CakeVideo from "../assets/CakeVideo.webm"
//import carousel 
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import Aos from 'aos'
// Style
import "../Style/Home.css"
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(() => {
    document.title="KhaoPiyo | Home"
    Aos.init();
  }, [])
  
  return (
    <>
    <div className='sliderIntro'>
     <Carousel className='caro' autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} interval={2000}>
   <img src={banner1} className="bannerimg"  alt="banner1" />
   <img src={banner2} className="bannerimg"  alt="banner2" />
   <img src={banner3} className="bannerimg"  alt="banner3" />
   <img src={banner4} className="bannerimg"  alt="banner4" />
   <img src={banner5} className="bannerimg"  alt="banner5" />
  </Carousel>
   </div>
   <div className="introdiv">
    <h4 className='introhead'>Inspiration for your first order</h4>
    <div className="introimagediv">
      <div className="imgcont"> <HashLink to='/#ordernow'><img className='introimg' src={pizzaintro} alt="pizzaintro" /></HashLink><h4>Pizza</h4> </div>
      <div className="imgcont"><img className='introimg' src={burgerintro} alt="burgerintro" /> <h4>Burger</h4></div>
      <div className="imgcont"><img className='introimg' src={cakeintro} alt="cakeintro" /> <h4>Cake</h4></div>
    </div>
   </div>
   <div className="dishdiv">
    <div data-aos="fade-right"  className="dish">
      <div className="dishCont">
      <h3>Pizza</h3>
        Indulge in vegetarian pizza perfection at Khao Piyo. From the classic Veggie Supreme to the savory Margherita, our pizzas are renowned for their deliciousness. The best part? We offer convenient home delivery, so you can enjoy these delectable pizzas in the comfort of your own space. Satisfy your pizza cravings the vegetarian way at Khao Piyo.
        <Link to='/menu/pizza' className='menulink'>Order Now</Link>
        </div>
      <video className='dishVideo' src={PizzaVideo}  autoPlay={true} muted={true} loop={true}/>
    </div>
    <div data-aos="fade-right" className="Bdish">
      <video className='dishVideo' src={BurgerVideo}  autoPlay={true} muted={true} loop={true}/>
      <div className="dishCont">
      <h3>Burger</h3>
      Discover vegetarian burger bliss at Khao Piyo. From classic Veggie Cheeseburgers to zesty Spicy Chickpea Burgers, we offer a delightful range of flavors. Best of all, we provide home delivery, making it easy to savor these delicious vegetarian burgers in the comfort of your home. Order now and experience the vegetarian taste sensation at Khao Piyo!
        <Link to='/menu/burger' className='menulink'>Order Now</Link>
        </div>
    </div>
    <div data-aos="fade-right" className="dish">
      <div className="dishCont">
      <h3>Cake</h3>
      Life is sweeter with Khao Piyo's exquisite vegetarian cakes. Each slice, whether it's the classic Chocolate Truffle or the exotic Mango Delight, is a celebration of flavor. And the best part? Our cakes are available for home delivery, making it easy to indulge in vegetarian sweetness. Mark special moments or simply satisfy your sweet tooth with our delightful cakes.
        <Link to='/menu/cake' className='menulink'>Order Now</Link>
        </div>
      <video className='dishVideo' src={CakeVideo}  autoPlay={true} muted={true} loop={true}/>
    </div>
   </div>
    </>
  )
}
export default Home
