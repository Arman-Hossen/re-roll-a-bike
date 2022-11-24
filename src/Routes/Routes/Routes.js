
import { createBrowserRouter } from "react-router-dom";
import MainLook from "../../layout/MainLook";
import Error from "../../Pages/Error/Error";
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
        }
    ]


   }
  


])
export default router;