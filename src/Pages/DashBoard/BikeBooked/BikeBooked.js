import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const BikeBooked = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const url = `https://re-roll-abike-server.vercel.app/bookingbike?email=${user?.email}`;
  const { data: bookingbike = [] } = useQuery({
    queryKey: ["bookingbike", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: ` bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // const [login, setLogin] = useState([]);
  // useEffect(() => {
  //   fetch(`https://re-roll-abike-server.vercel.app/roll/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setLogin(data));
  // }, [user?.email]);

  // console.log(login?.role);
  return (
    <div>
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
            {bookingbike?.length &&
              bookingbike?.map((bike, index) => (
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
                  <td>
                    {bike.resale_price && !bike.paid && (
                      <Link to={`/dashboard/payment/${bike._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {bike.resale_price && bike.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BikeBooked;
