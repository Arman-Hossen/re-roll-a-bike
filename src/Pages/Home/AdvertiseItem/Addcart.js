import React from 'react';
import { GoVerified } from 'react-icons/go';

const Addcart = ({catagory}) => {
    const {  model,img, verified,location,resale_price,original_price,year_used,registered,seler_name } = catagory;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          
          
        </h2>
        
        <p>Resale Price: ${resale_price}</p>
        <p>Origal Price: ${original_price}</p>
        <p>Range of Used: {year_used} Year </p>
        <p>Post On: {registered.slice(0,10)}</p>
        <p>Saler: {seler_name}
        {
            verified!=='false'?
            <>
            <div className="badge badge-secondary"><GoVerified className="text-white" /></div>
            </>:<></>

          }</p>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>
    );
};

export default Addcart;