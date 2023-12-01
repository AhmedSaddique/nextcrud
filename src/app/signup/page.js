"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', age: '', phoneNumber:'' , email: '', password: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: (name === 'age') ? parseInt(value, 10) || '' : value
        }));
    };
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user', formData);
            console.log(response.data);
            router.push('/login');
            // Redirect or show success message
        } catch (error) {
            alert('There was an error submitting the form:', error);
        }
    };

   
  return (
    <form className="max-w-lg mx-auto my-10 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
    <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >First Name </label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                     type="text"  value={formData.firstName} onChange={handleChange} placeholder="First Name" name='firstName' />
             </div>
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >Last Name</label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                      type="text" value={formData.lastName} onChange={handleChange} placeholder="LastName" name='lastName'  />
             </div>
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >age</label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                      type="number" value={formData.age} onChange={handleChange} placeholder="age" name='age'  />
             </div>
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >Phone Number</label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                      type="number" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" name='phoneNumber'  />
             </div>
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >Email</label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                      type="email" value={formData.email} onChange={handleChange} placeholder="Email" name='email'  />
             </div>
             <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
                 <input 
                     className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" 
                      type="password" value={formData.password} onChange={handleChange} placeholder="Password" name='password'  />
             </div>
         

         <button 
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         type='submit'
        >
             SignUp
         </button>
     </form>
  )
}

export default Signup