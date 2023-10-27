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
const router = createBrowserRouter([
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