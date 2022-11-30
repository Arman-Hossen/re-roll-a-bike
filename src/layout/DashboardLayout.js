import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import UseSeller from '../hooks/UseSeller';


import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [admin , adminLoading] = useAdmin(user?.email)
    const [seller] = UseSeller(user?.email)
    console.log(admin);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="bike-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="bike-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


        <li><Link to='/dashboard'>Booked Bike</Link></li>
                   

            {
        admin && <>
        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/alluser'>All User</Link></li>
            <li><Link to='/dashboard/allseler' >All Seler</Link></li>
            <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li> 
            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        </>
      }
      {
        seller && <>
        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
        <li><Link to='/dashboard/myproducts'>My Product</Link></li>


        </>
      }
            
            {/* <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/alluser'>All User</Link></li>
            <li><Link to='/dashboard/allseler' >All Seler</Link></li>
            <li><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
            <li><Link to='/dashboard/myorders'>My Orders</Link></li> */}
    
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;