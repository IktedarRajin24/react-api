/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import CoinData from '../CoinData/CoinData';
import axios from 'axios';

const CoinLayer = () => {
    const [coinData, setCoinData] = useState({});
    useEffect(()=>{
        // fetch('http://api.coinlayer.com/live?access_key=e421467f98106b6a82b69034a47a7a97&expand=1')
        axios.get('http://api.coinlayer.com/live?access_key=e421467f98106b6a82b69034a47a7a97&expand=1')
        .then(res => setCoinData(res.data))
    },[])
    
    return (
        <div className='bg-blue-500 h-96'>
            <div className='flex justify-between items-center w-full'>
                <div className='ms-20 w-1/2 flex flex-col items-start justify-center'>
                    <h1 className='text-white text-4xl font-bold py-10'>CoinLayer API</h1>
                    <p className='w-1/2 text-sm text-sky-200 mb-10'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, sit ad repudiandae enim corporis aliquid quam facilis. Voluptas maxime asperiores, earum et, temporibus esse hic nulla quae suscipit reprehenderit itaque!</p>
                </div>
                <div className='w-1/2'>
                    <img src="images/coin.jpg" className='w-1/2 mx-auto rounded-full' alt="" />
                </div>
            </div>
            <Marquee pauseOnHover speed={100}>
                {
                    Object.keys(coinData).length>0 && <CoinData data={coinData} rates={coinData.rates}/>
                }
            </Marquee>
        </div>
    );
};

export default CoinLayer;