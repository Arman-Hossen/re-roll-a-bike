import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BikeBooked = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookingbike?email=${user?.email}`;
    const {data:bookingbike=[]} = useQuery({
        queryKey:['bookingbike', user?.email],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers:{
                    authorization:` bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    
  
    // const [login, setLogin] = useState([]);
    // useEffect(() => {
    //   fetch(`http://localhost:5000/roll/${user?.email}`)
    //     .then((res) => res.json())
    //     .then((data) => setLogin(data));
    // }, [user?.email]);
  
    // console.log(login?.role);
    return (
        <div>
            <h2>Booked Bike</h2>
            <div className="overflow-x-auto">
               
           <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Pay Button</th>
              </tr>
            </thead>
            <tbody>
              {bookingbike.map((bike, index) => (
                <tr key={bike._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={bike.img} alt="phone" />
                      </div>
                    </div>
                  </td>
                  <td>{bike.model}</td>
                  <td>{bike.resale_price}</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default BikeBooked;