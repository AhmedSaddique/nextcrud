"use client"
import React, { useState } from 'react'

const Upload = () => {
    const [file, setFile] = useState();

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.append('file', file);
        let result = await fetch('api/upload', {
            method: 'POST',
            body: data
        });
        console.log(result);
        result = await result.json();
        console.log(result);
        if(result.success){
            alert('File uploaded successfully');
        }else{
            alert('File upload failed');
        }
    }
    
  return (
    <div className='mx-auto mt-20 w-[50%]'>
        <form on onSubmit={handleSubmit}>
            <input type="file"
            name='file'
            onChange={handleChange}
            
            />
            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default Upload