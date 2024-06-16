import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ACcount } from './Account/ACcount';
import ReactDOM from 'react-dom';
import App from './App';
// Define the layout component
const Layouts = () => {
    return (
      <div>
        {/* <Headers /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };
  
  // Define routes including admin route
  const routes = [
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <App />,
        },
         
  
        {
          path: "/admin/",
          element: <ACcount />,
          children: [
           
            
            
          ],
        },
      ],
    },
  ];
  
  // Create browser router
  const router = createBrowserRouter(routes);
  
  // Render the application
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
