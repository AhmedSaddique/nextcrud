"use client"
// const { cardId: queryCardId } = router.query;
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const UpdateCard = () => {
    const router = useRouter();
    const [cardData, setCardData] = useState({ img: '', heading: '', para: '' });
    const [cardId, setCardId] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const queryCardId = urlParams.get('cardId');
            if (queryCardId) {
                setCardId(queryCardId);
                axios.get(`/api/imagecard/${queryCardId}`).then((res) => {
                    setCardData({ ...res.data.card }); // Assuming `img` is a file and not a string
                    console.log(res.data.card);
                });
            }
        }
    }, []);
    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardData(prevState => ({ ...prevState, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        }
        formData.append('heading', cardData.heading);
        formData.append('para', cardData.para);

        try {
            const response = await axios.put(`/api/imagecard/${cardId}`, formData);
            if (response.data.success) {
                alert('Card updated successfully');
                router.push('/imagecard');
            } else {
                alert('Card update failed');
            }
        } catch (error) {
            console.error('Error updating the card:', error);
            alert('Error updating the card');
        }
    };
   
    return (
        <div>
            <form className="max-w-lg mx-auto my-10 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                    <input 
                        type="file" 
                        name="img"
                        onChange={handleImageChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Heading</label>
                    <input 
                        name="heading" 
                        type="text" 
                        placeholder="Heading" 
                        value={cardData.heading}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                    <textarea 
                        name="para"
                        placeholder="Type your message here..."
                        rows="4"
                        value={cardData.para}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateCard;
