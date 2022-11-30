import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const {data: mydata = [], refetch} = useQuery({
        queryKey: ['allrole'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/mydata?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
        <h2>This is All user</h2>
        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Status</th>
    <th>Advertise</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
    {
        mydata.map((users, index) => <tr key={users._id}>
            <th>{index+1}</th>
            <td>{users.seler_name}</td>
            <td>{users.email}</td>
            <td>{users.isSoled ?
             <>Sold</>:
             <>Unsold</>}</td>

            
            <td>{ user.advertise ? <></>:<><button  className='btn btn-xs btn-primary'>Advertise</button></> }</td>
            <td><button className='btn btn-xs text-red-400'>Delete</button></td>
          </tr>)
    }
</tbody>
</table>
</div>
        
        
    </div>
    );
};

export default MyProducts;