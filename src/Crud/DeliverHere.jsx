import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DeliverHere = () => {
  const location = useLocation();
  const { address } = location.state || {}; 

  if (!address) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">No Address Selected!</h1>
        <Link to="/address">
          <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Back to Address Selection
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-4 mb-5 rounded-lg shadow-lg text-center bg-gray-800">
        Delivery Address
      </h1>
      <div className="flex-grow flex items-center justify-center py-10">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 p-5 border border-gray-300 shadow-lg rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold text-center mb-6">Deliver Here</h2>
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{address.ename}</h3>
            <p className="text-gray-700">{address.email}</p>
            <p className="text-gray-700">{address.mobile}</p>
            <p className="text-gray-700">{address.address}</p>
            <p className="text-gray-700">{address.pincode}</p>
          </div>
          <div className="flex justify-center mt-10 space-x-4">
            {/* Link to Checkout page */}
            <Link to="/checkout">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Confirm and Proceed to Checkout
              </button>
            </Link>
            <Link to="/address">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                Change Address
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverHere;



