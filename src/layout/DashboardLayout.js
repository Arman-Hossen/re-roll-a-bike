import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
      
      <li><Link>Booked Bike</Link></li>
      <li><Link>Add Product</Link></li>
      <li><Link>All Seler</Link></li>
      <li><Link>All Buyers</Link></li>
      <li><Link>My Orders</Link></li>

    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;