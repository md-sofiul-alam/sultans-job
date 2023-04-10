import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Applied from "./components/Applied";
import Blog from "./components/Blog";
import Jobcategory from "./components/Jobcategory";
import Root from "./components/Root";
import Featuresjob from "./components/Featuresjob";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children: [
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/",
        element: <Featuresjob></Featuresjob>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
