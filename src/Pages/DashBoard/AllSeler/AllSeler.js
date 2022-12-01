import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const AllSeler = () => {

  //   const [allSeller, setAllSeller] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/allrole?role=Seller`)
  //     .then((res) => res.json())
  //     .then((data) => setAllSeller(data));
  // }, []);
  const {data: allSeller = [], refetch} = useQuery({
    queryKey: ['allrole'],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/allrole?role=Seller`);
        const data = await res.json();
        return data;
    }
});
const handleDelete = id =>{
  const proceed = window.confirm('Are you sure, you want to delete this user');
  if(proceed){
      fetch(`http://localhost:5000/deleteuser/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.deletedCount > 0){
             
              toast.success("Successfully Deleted!");
              refetch();
          }
      })
  }
}
const handleStatusUpdate = (id, email) => {

  console.log(id,email);
  fetch(`http://localhost:5000/verifiedcataupdate/${email}`, {
    
      method: 'PATCH', 
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({verified: 'true'})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
          toast.success("Successfully Veryfied!");
          refetch();
          
          
      }
  })
  fetch(`http://localhost:5000/verifiedupdate/${id}`, {
    
      method: 'PATCH', 
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({verified: 'true'})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
          toast.success("Successfully Veryfied!");
          refetch();
          
          
      }
  })
  
}
  
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
                {/* {
                    Seller.verified !=='true' ?
                    <><button className="btn btn-xs btn-primary"onClick={() => handleStatusUpdate(Seller._id)}>Verify</button></>:
                    <><button className="btn btn-xs btn-disabled">Verifed</button></>
                  } */}
                  {
           
           Seller.verified !=='true'?
           <>
           <label className="btn btn-primary" htmlFor="booking-bike" onClick={() => handleStatusUpdate(Seller._id, Seller.email)} >
           Verify
          </label>
           
           </>:<>
           <label className="btn btn-disabled" htmlFor="booking-bike" >
           verified
          </label>
           </>

         
       }
                </td>
                <td>
                  <button className="btn btn-xs text-red-400" onClick={() => handleDelete(Seller._id)}>Delete</button>
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