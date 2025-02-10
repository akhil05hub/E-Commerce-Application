import React from "react";
import { useCart } from "../Cards/CartContext"; 
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart(); 
  const navigate = useNavigate(); 

  // Function to handle the "Place Order" button click for a specific product
  const handlePlaceOrder = (item) => {
    navigate("/checkout", { state: { product: item } }); 
  };

  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    return <div className="text-center text-2xl mt-10">Your cart is empty!</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition mx-auto w-full max-w-[300px]">
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-contain mb-4 rounded-lg"/>

            {/* Product Details */}
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">Price: ₹{item.price}</p>
            <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-800 font-semibold mb-4">
              Total: ₹{item.price * item.quantity}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between mb-4">
              <button
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => removeFromCart(item.id)}>
              Remove
            </button>

            {/* Place Order Button */}
            <button
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              onClick={() => handlePlaceOrder(item)}>
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

