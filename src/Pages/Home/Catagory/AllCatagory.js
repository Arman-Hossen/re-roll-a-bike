import React from "react";
import { Link } from "react-router-dom";

const AllCatagory = ({ catagory }) => {
  const { _id, img, title } = catagory;

  return (
    <Link to={`/category/${_id}`}>
      {/* <Link to={`/category/${title}`}> */}
      <div className="card  bg-base-50 shadow-xl image-full">
        <figure>
          <img  src={img}  alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{title}</h2>

          <div className="mt-10 justify-end"></div>
        </div>
      </div>
    </Link>
  );
};

export default AllCatagory;
