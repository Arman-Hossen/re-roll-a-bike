import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CatagoryDetailsCard from './CatagoryDetailsCard';

const CategoriesDetails = () => {
    const params = useParams();
       
       const id = params.id;
    //    console.log(id);

       const [category, setCategory] = useState([]);
         useEffect(() => {
        fetch(`http://localhost:5000/category?service_id=${id}`)
        .then((res) => res.json())
        .then((data) => setCategory(data));
        }, [id]);
    return (
        <div>
            <h2>This is catagory details:{category.length} </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6 ">
            {
                category.map(cat =><CatagoryDetailsCard key={cat._id} cat={cat}></CatagoryDetailsCard> )
            }
            </div>
          
            
        </div>
    );
};

export default CategoriesDetails;