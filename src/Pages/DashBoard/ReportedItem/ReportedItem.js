import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ReportedItem = () => {
  const { data: reported = [], refetch } = useQuery({
    queryKey: ["allrole"],
    queryFn: async () => {
      const res = await fetch(
        `https://re-roll-abike-server.vercel.app/allproduct?report=true`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this user"
    );
    if (proceed) {
      fetch(`https://re-roll-abike-server.vercel.app/deleteproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted!");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pice</th>
              <th>Model</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reported.map((users, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>{users.seler_name}</td>
                <td>{users.resale_price}</td>
                <td>{users.model}</td>

                {/* <td>{ users?.role!== 'admin' && <button onClick={() => handleMakeAdmin(users._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                <td>
                  <button
                    className="btn btn-xs text-red-400"
                    onClick={() => handleDelete(users._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItem;
