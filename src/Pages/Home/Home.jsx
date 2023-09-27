/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import Header from '../../Layouts/Header/Header';
import CoinLayer from '../../components/CoinLayer/CoinLayer';
import ImageGenerate from '../../components/ImageGenerate/ImageGenerate';
import DogsApi from '../../components/DogsApi/DogsApi';
import { QueryClientProvider, QueryClient } from 'react-query';

const Home = () => {
    const client = new QueryClient()
    return (
        <div>
            <Header/>
            <QueryClientProvider client={client}>
                <CoinLayer/>
            </QueryClientProvider>
            <ImageGenerate/>
            <QueryClientProvider client={client}>
                <DogsApi/>
            </QueryClientProvider>
        </div>
    );
};

export default Home;