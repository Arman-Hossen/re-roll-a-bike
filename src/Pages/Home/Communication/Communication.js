import React from 'react';
import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { TbMessagePlus } from 'react-icons/tb';


import cardImg1 from '../../../assets/Footer_BG.jpg';

const Communication = () => {
    return (
        <div>

            <div className='grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 m-6'>
            <div className="hero min-h-screen border-2" style={{ backgroundImage: `url(${cardImg1})` }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

    <BsFillChatRightDotsFill className="mb-5 text-2xl font-bold" />

      <h1 className="mb-5 text-2xl font-bold">NEED HELP?</h1>
      <p className="mb-5">Our dedicated team are here to help</p>
      <button className="btn btn-outline btn-primary">CHAT NOW</button>
    </div>
  </div>
</div>

<div className="hero min-h-screen border-2" style={{ backgroundImage: `url(${cardImg1})` }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

    <FiPhoneCall className="mb-5 text-2xl font-bold" />

      <h1 className="mb-5 text-2xl font-bold">CALL US</h1>
      <p className="mb-5">Talk to our team 24/7 about your needs</p>
      <h1 className="mb-5 text-2xl font-bold">666 - 880 - 33388</h1>
      
    </div>
  </div>
</div>
<div className="hero min-h-screen border-2" style={{ backgroundImage: `url(${cardImg1})` }}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

    <TbMessagePlus className="mb-5 text-2xl font-bold" />

      <h1 className="mb-5 text-2xl font-bold">SUBSCRIBE US</h1>
      <p className="mb-5">And get the scoop on sales & new gear!</p>
      
      <div>
   
    <div className="form-control ">
      
      <div className="relative">
        <input type="text" placeholder="Enter your email" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>





            </div>
            
        </div>
    );
};

export default Communication;