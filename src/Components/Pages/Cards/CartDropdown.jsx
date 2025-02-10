import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; 

const CartDropdown = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleBuyNow = (item) => {
        // Navigate to payment page with selected item details
        navigate('/checkout', { state: { item } });
    };

    if (cartItems.length === 0) {
        return <div className="p-4 text-center">Your cart is empty.</div>;
    }

    return (
        <div className="p-4">
            {cartItems.map((item) => (
                <div key={item.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <div className="flex items-center">
                        <button
                            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                        </button>
                        <button
                            className="ml-2 text-red-500 hover:underline"
                            onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                    <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CartDropdown;
