import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Communication from '../Communication/Communication';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Catagory></Catagory>
            <AdvertiseItem></AdvertiseItem>
            <Communication></Communication>
            
        </div>
    );
};

export default Home;