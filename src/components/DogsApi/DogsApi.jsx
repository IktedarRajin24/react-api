/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const DogsApi = () => {
    const [dogs, setDogs] = useState([])
    const [breeds, setBreeds] = useState([])
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('Affenpinscher')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => setBreeds(data))
    },[])

    useEffect(()=>{
        setIsLoading(true);
        breed && fetch(`https://api.thedogapi.com/v1/images/search?breed_names=${breed}`)
        .then(res => res.json())
        .then(data => setDogs(data))
        setIsLoading(false)
    },[breed])

    

    const handleFilterValue = (e) =>{
        setBreed(e.target.value)
        
    }

    
    const found = breeds.find((b) => b.name === breed)
    

    return (
        <div className='dogs-section bg-sky-400 h-full w-full pb-40'>
            <h1 className='text-5xl text-blue-600 font-bold text-center pt-20'>The Dogs API</h1>
            <div className='flex flex-col justify-center items-center w-1/2 pt-10'>
                
                <select  onChange={handleFilterValue} className='w-1/2 h-10 mb-10 rounded-full text-slate-400 text-center' name="dogs" id="dogs">
                    {
                        
                        breeds.map(breed => <option className='' key={breed.id} value={breed.name}>{breed.name}</option>)
                    }                
                </select>
                <div className='dogs-section w-11/12 pb-40'>
                    
                    
                    {
                        isLoading? "Loading..." :
                        
                        dogs && dogs.map(dog =>
                        <div className='bg-white w-11/12 mx-auto p-5 h-full' key={dog.id}>
                            <img className='h-60 mx-auto object-contain'  src={dog.url} alt="" />
                            <p className='text-xl font-bold text-red-600 my-5 text-center'>{breed}</p>
                            <p className='text-sm italic font-thin mb-1 text-center'>{found && found.temperament}</p>
                            <p className='text-sm font-light mb-1 text-center'>Origin: {found && (found.origin)}</p>
                            <p className='text-sm font-light mb-1 text-center'>Weight: {found && found.weight.metric} kgs</p>
                            <p className='text-sm font-light mb-1 text-center'>Height: {found && found.height.metric} cm at the withers</p>
                            <p className='text-sm font-light mb-1 text-center'>{found && found.life_span} years average life span.</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DogsApi;