import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate a login process
    if (email && password) {
      // Store the user data
      localStorage.setItem('user', JSON.stringify({ email }));
      // Redirect to the homepage or dashboard after login
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="w-1/3 p-6 border rounded shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
