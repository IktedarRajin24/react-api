/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../Layouts/Header/Header';
import CoinLayer from '../../components/CoinLayer/CoinLayer';
import ImageGenerate from '../../components/ImageGenerate/ImageGenerate';
import DogsApi from '../../components/DogsApi/DogsApi';

const Home = () => {
    return (
        <div>
            <Header/>
            <CoinLayer/>
            <ImageGenerate/>
            <DogsApi/>
        </div>
    );
};

export default Home;