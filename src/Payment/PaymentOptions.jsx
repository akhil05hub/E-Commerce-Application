import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import phonepe_logo from '../assets/phonepe_logo.png';
import upi_logo from '../assets/Upi-Logo.png';
import wallet_logo from '../assets/wallet_logo.png';
import bank_cards from '../assets/bank-cards.png';
import netbanking_logo from '../assets/NetBanking_logo.png';
import cashondelivery_logo from '../assets/cashondelivery_logo.png';

const PaymentOptions = () => {
    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 };

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handlePayment = () => {
        if (!selectedOption) {
            alert('Please select a payment method');
            return;
        }
        alert(`You have selected ${selectedOption} as your payment method.`);
        // Add payment processing logic here
    };

    return (
        <div className="px-5 py-10">
            <h2 className="text-3xl font-bold mb-6">Payment Options</h2>
            <div className="border border-gray-300 rounded-lg p-6">
                {/* PhonePe */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="phonepe"
                        name="payment"
                        value="PhonePe"
                        onChange={() => handleOptionChange('PhonePe')} />
                    <label htmlFor="phonepe" className="flex items-center">
                        <img
                            src={phonepe_logo}
                            alt="PhonePe"
                            className="w-8 h-8 mr-2"/>
                        PhonePe UPI
                    </label>
                </div>

                {/* UPI */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="upi"
                        name="payment"
                        value="UPI"
                        onChange={() => handleOptionChange('UPI')}/>
                    <label htmlFor="upi" className="flex items-center">
                        <img
                            src={upi_logo}
                            alt="UPI"
                            className="w-8 h-8 mr-2"/>
                        UPI
                    </label>
                </div>

                {/* Wallet */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="wallet"
                        name="payment"
                        value="Wallet"
                        onChange={() => handleOptionChange('Wallet')}/>
                    <label htmlFor="wallet" className="flex items-center">
                        <img
                            src={wallet_logo}
                            alt="Wallet"
                            className="w-8 h-8 mr-2"/>
                        Wallet
                    </label>
                </div>

                {/* Credit/Debit Card */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="Credit/Debit Card"
                        onChange={() => handleOptionChange('Credit/Debit Card')}/>
                    <label htmlFor="card" className="flex items-center">
                        <img
                            src={bank_cards}
                            alt="Credit/Debit Card"
                            className="w-8 h-8 mr-2"/>
                        Credit/Debit Card
                    </label>
                </div>

                {/* Net Banking */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="netbanking"
                        name="payment"
                        value="Net Banking"
                        onChange={() => handleOptionChange('Net Banking')}/>
                    <label htmlFor="netbanking" className="flex items-center">
                        <img
                            src={netbanking_logo}
                            alt="Net Banking"
                            className="w-8 h-8 mr-2"/>
                        Net Banking
                    </label>
                </div>

                {/* Cash on Delivery */}
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="cod"
                        name="payment"
                        value="Cash on Delivery"
                        onChange={() => handleOptionChange('Cash on Delivery')}
                        className="mr-2"/>
                    <label htmlFor="cod" className="flex items-center">
                        <img
                            src={cashondelivery_logo}
                            alt="Cash on Delivery"
                            className="w-8 h-8 mr-2"/>
                        Cash on Delivery
                    </label>
                </div>
            </div>

            <button
                className="mt-6 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                onClick={handlePayment} >
                Pay ₹{totalPrice} Now
            </button>
        </div>
    );
};

export default PaymentOptions;
