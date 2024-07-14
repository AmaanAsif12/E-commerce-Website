import {createBrowserRouter,RouterProvider, } from "react-router-dom";
import Detail from "../Detail";
import DashboardPage from "../views/dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
    },
    {
        path: "/detail/:id",
        element: <Detail/>,
      },
  ]);

  function AppRouter(){
    return (
     <RouterProvider router={router} />
    )
  }

  export default AppRouter;
