import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import SignUp from './Components/SignUp'; //  SignUp component
const router = createBrowserRouter([
  {
    path: "/",
    element:<SignUp/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <RouterProvider router={router}/>
);