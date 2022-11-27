
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import MainLook from "../../layout/MainLook";
import Blog from "../../Pages/Blog/Blog";
import BikeBooked from "../../Pages/DashBoard/BikeBooked/BikeBooked";
import Error from "../../Pages/Error/Error";
import CategoriesDetails from "../../Pages/Home/CategoriesDetails/CategoriesDetails";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
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
        }
    ]

   }
  


])
export default router;