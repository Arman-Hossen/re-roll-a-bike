import React, { useEffect, useState } from 'react';
import AllCatagory from './AllCatagory';
import axios from 'axios';

const Catagory = () => {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5000/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
    axios.get('http://localhost:5000/categories')
    .then((data) => setCategories(data.data));
    

  }, []);
    return (
        <div>
            <h1>Total Catagory:{categories.length}</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 ">
            {
                categories.map((catagory)=> <AllCatagory key={catagory._id} catagory={catagory}></AllCatagory> )
            }
            </div>
            
        </div>
    );
};

export default Catagory;