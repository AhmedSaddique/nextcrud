import React from 'react'

const insert = () => {
  return (
    <>
       <form className="max-w-lg mx-auto my-10 p-6 rounded shadow-lg">
       <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Heading
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Heading" 
                    />
                </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Message
                </label>
                <textarea 
                    id="message"
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your message here..."
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

export default insert