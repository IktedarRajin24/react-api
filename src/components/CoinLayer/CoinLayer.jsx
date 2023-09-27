/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import CoinData from '../CoinData/CoinData';
import axios from 'axios';
import getData from '../../Utilities/useFetch';
import useSWR from 'swr';
import { useQuery } from 'react-query';

const CoinLayer = () => {
    // const { data } = useSWR('http://api.coinlayer.com/live?access_key=e421467f98106b6a82b69034a47a7a97&expand=1', useFetch, {
    //     suspense: true
    // });

    // console.log(import.meta.env.VITE_REACT_APP_COIN_ACCESS_KEY);

    const {data} = useQuery('coin-data', () => getData(`http://api.coinlayer.com/live?access_key=${import.meta.env.VITE_REACT_APP_COIN_ACCESS_KEY}&expand=1`))
    // console.log(data)
    
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
                    data && Object.keys(data).length>0 && <CoinData data={data} rates={data.rates}/>
                }
            </Marquee>
        </div>
    );
};

export default CoinLayer;