import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Home from "./Home";
import Login from "./Login";
import Product from "./page/Product";
import Contact from "./page/Contact";
import AboutUs from "./page/AboutUs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about-us",
        element: <AboutUs />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);
