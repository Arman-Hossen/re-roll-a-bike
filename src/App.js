import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='p-0 md:p-10' >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      
    </div>
  );
}

export default App;
