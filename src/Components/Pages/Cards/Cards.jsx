import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 

const Cards = () => {
  const [state, setState] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchApi = () => {
      axios.get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          setState(response.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchApi();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  return (
    <div className="mt-52 container mx-auto px-20 text-center bg-gradient-to-r from-gray-400 to-red-100">
      <h1 className="text-3xl font-bold text-center mb-2 p-5 bg-gradient-to-r from-red-700 to-pink-800 text-transparent bg-clip-text">DAILY DEALS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.length > 0 ? (
          state.map(({ id, title, price, image, category }) => (
            <div data-aos="flip-left"
              key={id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out transform bg-slate-300">
              <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                <img src={image} alt={title} className="object-contain max-h-full max-w-full transition-transform duration-300 ease-in-out"/>
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">{title.slice(0, 20)}</h3>
              <p className="text-sm text-gray-600 mb-2 capitalize">{category}</p>
              <p className="text-lg font-bold text-blue-600">${price} <CountUp end={price}/></p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link to='/address'>
                  <button className='px-8 py-2 text-white bg-orange-500 hover:bg-sky-500 rounded-lg font-bold'>
                    BUY
                  </button>
                </Link>
                <button
                  onClick={() => handleAddToCart({ id, title, price, image, category })}
                  className='px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-bold'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">Loading...</p>
        )}
      </div>
      <div className="bg-gradient-to-r from-gray-400 to-red-100 py-6"></div>
    </div>
  );
};

export default Cards;
