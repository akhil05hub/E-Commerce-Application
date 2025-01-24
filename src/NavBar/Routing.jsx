import React from 'react'
import Navbar from './Navbarr'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
import Cart from '../Components/Pages/Cards/Cart'
import ProductList from '../Components/Pages/Cards/ProductList'
import PaymentOptions from '../Payment/PaymentOptions'


const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/payment-options" element={<PaymentOptions />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
