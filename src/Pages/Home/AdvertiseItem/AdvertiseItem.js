import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Addcart from './Addcart';

const AdvertiseItem = () => {
    const {user} = useContext(AuthContext);
    const {data: mydata = [], refetch} = useQuery({
        queryKey: ['allrole'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/mydata?advertise=true");
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            {
                    mydata.length > 0 ? <>
                    <h2 className='text-3xl text-center'>Advertised Item</h2>
                    </> : <></>
                }

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6 ">

            {
                mydata.map((catagory)=> <Addcart key={catagory._id} catagory={catagory}></Addcart> )
            }

            </div>
            
           

            
        </div>
    );
};

export default AdvertiseItem;