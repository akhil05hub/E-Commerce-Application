import React from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow-lg text-center">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

