import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from "./components/Home";
import Login from './components/login';
import App from './App'
import './index.css'
import Signup from './components/signup';
import Search from './components/search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element:<Login/>,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path:"search",
        element: <Search />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
