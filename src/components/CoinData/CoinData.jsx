/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CoinData = ({rates, data}) => {
    
    return (
        <div className='flex bg-sky-600 h-36'>
            {
                
                Object.keys(rates).map((item)=>
                <div className='ms-10 mt-5 w-36' key={item}>
                    <p className='text-xs mb-2 text-white font-semibold'>{item}/{data.target}</p>
                    
                    <p className='text-xl mb-1 text-slate-100 font-light'>{(parseFloat(rates[item]['rate'])).toFixed(2)} <span className='text-slate-300 ms-2 font-thin'>{data.target}</span></p>
                    <p className='flex justify-between w-2/4 text-sm text-white'><span className='text-slate-300 font-thin'>High:</span> {(parseFloat(rates[item]['high'])).toFixed(2)}</p>
                    <p className='flex justify-between w-2/4 text-sm text-white'><span className='text-slate-300 font-thin'>Low:</span> {(parseFloat(rates[item]['low'])).toFixed(2)}</p>

                </div>)
            }
            
        </div>
    );
};

export default CoinData;