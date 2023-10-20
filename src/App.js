import React from 'react'
import {HashRouter as Router, Routes , Route} from "react-router-dom";
// importing all the components
import Home from  "./Components/Home.jsx";
import Navbar from  "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx';
import Menunav from './Components/Menunav.jsx';
import Pizza from './Components/Pizza.jsx';
import Cart from './Components/Cart.jsx';
import Burger from './Components/Burger.jsx';
import Cake from './Components/Cake.jsx';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';
import LoginSingUp from './Components/LoginSingUp';
import OrderPlaced from './Components/OrderPlaced';
import LoginAdmin from './Components/LoginAdmin';
import Admin from './Components/Admin.jsx';
import ShowNav from './Components/ShowNav.jsx';
//importing Style
import "./Style/Style.css"
const App = () => {
  return (
    <Router>
      <ShowNav>
      <Navbar/>
      </ShowNav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menunav/>} >
          <Route path='pizza' element={<Pizza/>}/>
          <Route path='burger' element={<Burger/>}/>
          <Route path='cake' element={<Cake/>}/>
        </Route>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/orderplaced' element={<OrderPlaced/>} />
        <Route path='/Login' element={<LoginSingUp/>} />
        <Route path='/LoginAdmin' element={<LoginAdmin/>} />
        <Route path='/Admin' element={<Admin/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
