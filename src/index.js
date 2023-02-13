import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
//pages
import StatsPage from "./pages/StatsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StatsPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <main className="content">
        <SideBar content={<RouterProvider router={router} />} />
      </main>
    </div>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
