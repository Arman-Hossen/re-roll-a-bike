import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const AllBuyer = () => {
  //   const [allBuyer, setAllBuyer] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/allrole?role=Buyer`)
  //     .then((res) => res.json())
  //     .then((data) => setAllBuyer(data));
  // }, []);

  const {data: allBuyer = [], refetch} = useQuery({
    queryKey: ['allrole'],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/allrole?role=Buyer`);
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

    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allBuyer.map((Buyer, index) => (
              <tr key={Buyer._id}>
                <th>{index + 1}</th>
                <td>{Buyer.name}</td>
                <td>{Buyer.email}</td>
                
                <td>
                  <button className="btn btn-xs text-red-400" onClick={() => handleDelete(Buyer._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            
        </div>
    );
};

export default AllBuyer;