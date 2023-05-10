import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./features/landing/Landing.page";
import AboutUsPage from "./features/aboutUs/AboutUs.page";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./features/notFound/NotFound.page";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
