import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://templatekits.themewarrior.com/ride-on/wp-content/uploads/sites/58/2022/06/PMLDYCB.jpg")` }}>
  <div className=""></div>
  <div className="hero-content text-left text-neutral-content ">
    <div className="text-left ">
      <h1 className="mb-5 text-xl font-bold">PAGE NOT FOUND</h1>
      <h1 className='mb-5 text-5xl font-bold'>404</h1>
      <p className='mb-5  font-bold'>Sorry, we couldn’t find the page you are looking</p>
      <Link
                        to='/'
                        
                        className='p-2 mt-5 text-decoration-none rounded-lg bg-primary text-light '
                    >
                        Back to homepage
                    </Link>
    </div>
  </div>
</div>
    );
};

export default Error;