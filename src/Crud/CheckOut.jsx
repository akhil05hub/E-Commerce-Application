import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const { product } = location.state || {}; 

  if (!product) {
    return (
      <div className="p-5 text-xl font-semibold text-center">
        No product selected for checkout.
      </div>
    );
  }

  const handleProceedToPayment = () => {
    const totalPrice = product.price * product.quantity; 
    alert(`Proceeding to payment for: ${product.name}`);
    navigate("/payment-options", { state: { totalPrice } });
  };

  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
      <div className="flex flex-col items-center border rounded-lg shadow-md p-6 bg-white max-w-md mx-auto">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-cover mb-4 rounded-lg"/>

        {/* Product Details */}
        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Price: ₹{product.price}</p>
        <p className="text-gray-600 mb-2">Quantity: {product.quantity}</p>
        <p className="text-gray-800 font-semibold mb-4">
          Total: ₹{product.price * product.quantity}
        </p>

        {/* Proceed to Payment Button */}
        <button
          className="mt-4 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
