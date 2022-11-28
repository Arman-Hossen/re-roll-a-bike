import React, { useEffect, useState } from 'react';

const AllSeler = () => {

    const [allSeller, setAllSeller] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allrole?role=Seller`)
      .then((res) => res.json())
      .then((data) => setAllSeller(data));
  }, []);

  
    return (
        <div>
            <h2>All seler: {allSeller.length}</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((Seller, index) => (
              <tr key={Seller._id}>
                <th>{index + 1}</th>
                <td>{Seller.name}</td>
                <td>{Seller.email}</td>
                <td>
                  <button className="btn btn-xs btn-primary">Verify</button>
                </td>
                <td>
                  <button className="btn btn-xs text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default AllSeler;