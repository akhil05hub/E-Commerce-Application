import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Simulate saving user data to localStorage
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignUp} className="w-1/3 p-6 border rounded shadow-lg">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
