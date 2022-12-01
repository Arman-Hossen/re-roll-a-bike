import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { GoVerified } from 'react-icons/go';
import { AuthContext } from "../../../Context/AuthProvider";


const CatagoryDetailsCard = ({ cat, setbikeModel,refetch }) => {

  const { _id, model,img, verified,location,resale_price,original_price,year_used,registered,seler_name,report,isSoled ,email} = cat;

  const {data: mydata = [] } = useQuery({
    queryKey: ['allrole'],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/mydata?email=${email}`);
        const data = await res.json();
        return data;
    }
});
  
  
  // const {user} = useContext(AuthContext);
  

  
const handleStatusUpdate = id => {
  toast.success("Successfully Reported!");

  console.log(id);
  fetch(`http://localhost:5000/reportupdate/${id}`, {
      method: 'PATCH', 
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({report: 'true'})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
          
          refetch();
          
          
      }
  })
}

 
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={img} alt="" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {model}
        
        
      </h2>
      <h2 className="card-title">
          Location: {location}
      </h2>
      <p>Resale Price: ${resale_price}</p>
      <p>Origal Price: ${original_price}</p>
      <p>Range of Used: {year_used} Years </p>
      <p>Post On: {registered.slice(0,10)}</p>
      <p>Saler: {seler_name}
      {
          verified!=='false'?
          <>
          <div className="badge badge-secondary"><GoVerified className="text-white" /></div>
          </>:<></>

        }</p>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      {
        
        isSoled!=='false'?
        <>
        <label className="btn btn-primary" htmlFor="booking-bike" onClick={()=>setbikeModel(cat)}>
        Book Now
       </label>
        
        </>:<>
        <label className="btn btn-disabled" htmlFor="booking-bike" >
        Booked
       </label>
        </>

      }

<label className="btn btn-primary" htmlFor="booking-bike" onClick={() => handleStatusUpdate(_id)} >
         Report
         </label>
      {/* {
         
          report !=='true'?
          <>
         
          
          </>:<>
          <label className="btn btn-disabled" htmlFor="booking-bike" >
          Reported
         </label>
          </>

        
      } */}
      
      </div>
    </div>
  </div>
  );
};

export default CatagoryDetailsCard;
