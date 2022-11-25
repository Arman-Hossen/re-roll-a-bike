
import { createBrowserRouter } from "react-router-dom";
import MainLook from "../../layout/MainLook";
import Error from "../../Pages/Error/Error";
import CategoriesDetails from "../../Pages/Home/CategoriesDetails/CategoriesDetails";
import Home from "../../Pages/Home/Home/Home";


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
            element: <CategoriesDetails></CategoriesDetails>,
           
        },
    ]


   }
  


])
export default router;