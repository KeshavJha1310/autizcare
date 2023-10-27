import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import SignUp from './Components/SignUp'; //  SignUp component
import Welcome from './Components/Welcome'
const router = createBrowserRouter([
  {
    path: "/auth",
    element:<SignUp/>,
  },
  
  {
    path: "/",
    element:<Welcome/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <RouterProvider router={router}/>
);