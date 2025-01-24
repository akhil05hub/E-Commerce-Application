import React from 'react';
import './App.css';
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/Pages/Cards/CartContext'; 
import Men from './Components/Pages/Collection/Men';
import Women from './Components/Pages/Collection/Women';
import Electronics from './Components/Pages/Collection/Electronics';
import Jewellery from './Components/Pages/Collection/Jewellery';
import Footer from './Components/Pages/Footer';
import Cheif from './Components/Pages/Collection/Cheif';
import BuyAddress from './Crud/BuyAddress';
import AddNewAddress from './Crud/AddNewAddress';
import DeliverHere from './Crud/DeliverHere';
import CheckOut from './Crud/CheckOut';
import OrderConfirmation from './Crud/OrderConfirmation';
import Cards from './Components/Pages/Cards/Cards';
import ProductList from './Components/Pages/Cards/ProductList';
import Cart from './Components/Pages/Cards/Cart';
import Login from './Components/Pages/Authentication/Login';
import SignUp from './Components/Pages/Authentication/SignUp';
import PaymentOptions from './Payment/PaymentOptions'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cheif />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/address" element={<BuyAddress />} />
          <Route path="/addnewaddress" element={<AddNewAddress />} />
          <Route path="/buyaddress" element={<BuyAddress />} />
          <Route path="/deliverhere" element={<DeliverHere />} /> 
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/cards" element={<Cards />} /> 
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment-options" element={<PaymentOptions />} />

        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;





