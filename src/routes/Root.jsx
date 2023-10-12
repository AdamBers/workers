import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Employees from "../pages/Employees";
import ErrorPage from "./ErrorPage";

export default function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/employees",
          element: <Employees />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
