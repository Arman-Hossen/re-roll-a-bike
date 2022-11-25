import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            {
                category.map(cat => cat.title)
            }
          
            
        </div>
    );
};

export default CategoriesDetails;