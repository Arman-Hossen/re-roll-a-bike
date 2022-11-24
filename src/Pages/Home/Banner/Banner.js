import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-lg"  style={{ backgroundImage: `url(${banner})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome To Arman's Kitchen</h1>
        <p className="mb-5">A recipe has no soul. You as the cook must bring soul to the recipe.So try My Food.</p>
        <button className="btn btn-primary mr-3">Get Started</button>
        <button className="btn btn-outline btn-primary">Contact Me</button>
      </div>
    </div>
  </div>
    );
};

export default Banner;