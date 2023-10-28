import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import SignUp from './Components/SignUp'; //  SignUp component
import Welcome from './Components/Welcome';
import DocSignUp from './Components/DocSignUp';
import UserForm from './Components/UserForm';
import TherapistForm from './Components/TherapistForm';
import Udashboard from './Components/Udashboard';
import Tdashboard from './Components/Tdashboard';
import Payment from './Components/Payment';
const router = createBrowserRouter([
  {
    path: "/c/dashboard",
    element:<Udashboard/>,
  },
  {
    path: "/bookPayment",
    element:<Payment/>,
  },
  {
    path: "/t/dashboard",
    element:<Tdashboard/>,
  },
  {
    path: "/c/auth",
    element:<SignUp/>,
  },
  {
    path: "/t/auth",
    element:<DocSignUp/>,
  },
  
  {
    path: "/therapistProfileform",
    element:<TherapistForm/>,
  },
  
  {
    path: "/userprofileform",
    element:<UserForm/>,
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