"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Imageinsert = () => {
  const [cardData, setCardData] = useState({ img:'', heading: '', para: '' });
  const [file, setFile] = useState();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('heading', cardData.heading);
    formData.append('para', cardData.para);

    try {
      const response = await axios.post('/api/imagecard', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      if (response.data.success) {
        alert('File uploaded successfully');
        router.push('/imagecard');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      alert('There was an error submitting the form:', error);
    }
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };


  return (
    <>
       <form className="max-w-lg mx-auto my-10 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
       <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Image
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="file" 
                        name='img'
                        placeholder="Heading" 
                        onChange={handleImageChange}
                    />
                </div>
       <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Heading
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="heading" 
                        type="text" 
                        placeholder="Heading" 
                        value={cardData.heading}
                        onChange={handleChange}
                    />
                </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Message
                </label>
                <textarea 
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 placeholder="Type your message here..."
                 rows="4"

                    name="para"
                    value={cardData.para}
                    onChange={handleChange}
                   
                />
            </div>

            <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send
            </button>
        </form>
    </>
  )
}

export default Imageinsert