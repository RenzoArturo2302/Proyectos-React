import React, { useContext, useState } from "react";
import HomeView from "./views/HomeView";
import "./styles.css";
import { DarkLightMode } from "./contexts/DarkLightModeContext";
import Navigation from "./views/Navigation";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
    ],
  },
]);

const App = () => {
  const { darkModeState, setDarkModeState } = useContext(DarkLightMode);

  return (
    <div className="App" data-theme={darkModeState ? "darkmode" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
