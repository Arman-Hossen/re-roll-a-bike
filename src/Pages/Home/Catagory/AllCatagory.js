import React from 'react';

const AllCatagory = ({catagory}) => {
    const {_id,img, title} = catagory;

    return (
        <div className="card  bg-base-50 shadow-xl image-full">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="mt-10 justify-end">
      <button className="btn btn-primary">Product</button>
    </div>
  </div>
</div>
    );
};

export default AllCatagory;