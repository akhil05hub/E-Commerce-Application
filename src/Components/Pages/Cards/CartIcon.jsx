import React, { useState } from 'react';
import { useCart } from './CartContext'; 

const CartIcon = () => {
    const { cartItems } = useCart();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="relative">
                🛒
                {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-sm px-2">
                        {cartItems.length}
                    </span>
                )}
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg">
                    <CartDropdown />
                </div>
            )}
        </div>
    );
};

export default CartIcon;



