
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import MainLook from "../../layout/MainLook";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeler from "../../Pages/DashBoard/AllSeler/AllSeler";
import AllUser from "../../Pages/DashBoard/AllUser/AllUser";
import BikeBooked from "../../Pages/DashBoard/BikeBooked/BikeBooked";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Error from "../../Pages/Error/Error";
import CategoriesDetails from "../../Pages/Home/CategoriesDetails/CategoriesDetails";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
   {
    path:'/',
    element:<MainLook></MainLook>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/category/:id',
            element: <PrivateRoutes><CategoriesDetails></CategoriesDetails></PrivateRoutes>,
           
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
    ]


   },
   {
    path:'/dashboard',
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children:[
        {
            path:'/dashboard',
            element:<BikeBooked></BikeBooked>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddProducts></AddProducts>
        },
        {
            path:'/dashboard/allseler',
            element:<AllSeler></AllSeler>
        },
        {
            path:'/dashboard/allbuyer',
            element:<AllBuyer></AllBuyer>
        },
        {
            path:'/dashboard/myorders',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/alluser',
            element:<AdminRoute><AllUser></AllUser></AdminRoute>
        }
    ]

   }
  


])
export default router;