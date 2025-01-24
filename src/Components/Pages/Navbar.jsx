import React from 'react';
import { Link } from 'react-router-dom';
import Aklogo from '../../assets/aklogo.png';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useCart } from "./Cards/CartContext"; 


const Navbar = () => {
  document.body.style.overflowX = 'hidden';
  const location = useLocation();
  const { cartItems } = useCart(); 

  // Calculate total items in cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const hideNavbarPages = ['/address', '/addnewaddress', '/deliverhere'];

  if (hideNavbarPages.includes(location.pathname)) {
    return null;
  } else {
    return (
      <div className="flex justify-between items-center w-full p-[20px] text-white bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90%">
        {/* Logo Section */}
        <div className="flex items-center w-[25%]">
          <Link to="/" className="flex items-center">
            <img src={Aklogo} alt="Aklogo" className="w-18 h-12 mr-1 ml-16" />
            <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-800 to-blue-900 text-transparent bg-clip-text">
              FASHIONS
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-[45%]">
          <ul className="flex justify-around text-2xl">
            <li className="hover:text-red-500 font-serif">
              <Link to="/men">Men</Link>
            </li>
            <li className="hover:text-red-500 font-serif">
              <Link to="/women">Women</Link>
            </li>
            <li className="hover:text-red-500 font-serif">
              <Link to="/electronics">Electronics</Link>
            </li>
            <li className="hover:text-red-500 font-serif">
              <Link to="/jewellery">Jewellery</Link>
            </li>
          </ul>
        </div>

        {/* Authentication and Cart Section */}
        <div className="flex items-center justify-end w-[25%] space-x-4 text-xl">
          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center px-3 py-2 text-white rounded-lg hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 transition">
            <FiLogIn className="mr-2" /> Login
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="flex items-center px-3 py-2 text-white rounded-lg hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 transition">
            <FiUserPlus className="mr-2" /> Sign Up
          </Link>

          {/* Cart Icon with Count */}
          <Link
            to="/cart"
            className="relative text-2xl text-white hover:text-orange-400 transition">
            <FaShoppingCart />
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {totalCartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar; 