
import { createBrowserRouter } from "react-router-dom";
import MainLook from "../../layout/MainLook";
import Home from "../../Pages/Home/Home/Home";


const router = createBrowserRouter([
   {
    path:'/',
    element:<MainLook></MainLook>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        }
    ]


   }
  


])
export default router;