"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import
import axios from 'axios';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`api/user/email/${email}`); // Consider changing to POST
      console.log(res.data.user.email);
      console.log(res.data.user.password);
      if (res.data.user.email === email && res.data.user.password === password) {

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.user.email);
        localStorage.setItem('firstName', res.data.user.firstName);
        localStorage.setItem('lastName', res.data.user.lastName);
        localStorage.setItem(`age`, res.data.user.age);
        localStorage.setItem('password', res.data.user.password);
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('firstName'));
        console.log(localStorage.getItem('lastName'));
        console.log(localStorage.getItem('age'));
        console.log(localStorage.getItem('password'));
      router.push('/');
      } else {
        console.log('Credentional is incorrect. Please check');
      }
    } catch (err) {
      console.log(err);
     
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <form className="max-w-lg mx-auto my-10 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
          Email
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          name='email'
          onChange={handleChange}
          value={email} // Corrected
          type="email" 
          placeholder="Email Address"  
        />
      </div>
      {/* Password Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          name='password'
          value={password} // Corrected
          onChange={handlePasswordChange}
          type="password" 
          placeholder="Password"  
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </form>
  )
}

export default Login;
