import React from "react";
import { GoVerified } from 'react-icons/go';

const CatagoryDetailsCard = ({ cat, setbikeModel }) => {
  const {  model,img, verified,location,resale_price,original_price,year_used,registered,seler_name } = cat;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model}
          {
            verified?
            <>
            <div className="badge badge-secondary"><GoVerified className="text-white" /></div>
            </>:<></>

          }
          
        </h2>
        <h2 className="card-title">
            Location: {location}
        </h2>
        <p>Resale Price: ${resale_price}</p>
        <p>Origal Price: ${original_price}</p>
        <p>Range of Used: {year_used} Months </p>
        <p>Post On: {registered.slice(0,10)}</p>
        <p>Saler: {seler_name}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <label htmlFor="booking-bike" onClick={()=>setbikeModel(cat)}>
         Book Now
        </label>
        </div>
      </div>
    </div>
  );
};

export default CatagoryDetailsCard;
