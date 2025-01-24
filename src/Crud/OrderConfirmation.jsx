import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="order-confirmation p-5">
      <h2 className="text-2xl font-semibold">Order Confirmed!</h2>
      <p className="mt-4">Your order has been placed successfully. Thank you for shopping with us!</p>
      <div className="mt-6">
        <button 
          onClick={handleContinueShopping}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
