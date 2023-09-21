/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';

const ImageGenerate = () => {
    const [imageName, setImageName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (e) =>{
        setImageName(e.target.value);
    }
    const generateImage = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Authorization", "Bearer 76856098d882ec5d0ed69efb98780c1ece7b9e19d3bfe7a5b4d844645e079727b74a8b2d9f39d0095e387874cde5ba23b488ee66460c8544e65980979851cf53");

        var urlencoded = new URLSearchParams();
        urlencoded.append("url", "https://i.ibb.co/pLQWFvM/J-P-D-98255-1.jpg");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };
        setIsLoading(true)
        imageName && fetch(`https://v1.api.amethyste.moe/generate/${imageName}`, requestOptions)
        .then(res => res.blob())
        .then(data => {
            const objectURL = URL.createObjectURL(data);
            setImageUrl(objectURL)
        })
        .catch(error => console.log(error))
        setIsLoading(false)
        
    }
    return (
        <div className='bg-sky-200 h-96 flex'>
            
            <div className='form-section w-1/2'>
                <h1 className='text-5xl pt-20 mb-5 w-9/12 mx-auto font-bold text-sky-400 '>Hey, what image you want to see?</h1>
                <form className='flex flex-col justify-between items-center'>
                    <input onChange={handleInputChange} className='w-1/2 h-8 rounded-full px-4 my-3' type="text" name="search" id="search" placeholder='Please enter some word' />
                    {/* {imageName} */}
                    <button onClick={generateImage} type='submit' className='generate-btn bg-green-500 rounded-full px-4 py-2 text-white'> 
                        Generate
                    </button>
                </form>
            </div>
            <div className='image-section w-1/2 flex justify-center items-center'>
                {
                    isLoading? "Loading..." : imageUrl && 
                    <img className='h-72' src={imageUrl} alt="Image" />
                }
            </div>
        </div>
    );
};

export default ImageGenerate;