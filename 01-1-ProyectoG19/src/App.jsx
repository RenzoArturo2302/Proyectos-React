import React, { useContext, useState } from "react";
import "./styles.css";
import { DarkLightMode } from "./contexts/DarkLightModeContext";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

// Views
import Navigation from "./views/Navigation";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import SearchView from "./views/SearchView";
import CreatePostView from "./views/CreatePostView";
import CategoriesView from "./views/CategoriesView";
import AboutUsView from "./views/AboutUsView";
import HelpView from "./views/HelpView";

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
      {
        path: "/create-post",
        element: <CreatePostView />,
      },
      {
        path: "/search",
        element: <SearchView />,
      },
      {
        path: "/categories",
        element: <CategoriesView />,
      },
      {
        path: "/about-us",
        element: <AboutUsView />,
      },
      {
        path: "/help",
        element: <HelpView />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <LoginView />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterView />
      </>
    ),
  },
]);

const App = () => {
  const { darkModeState } = useContext(DarkLightMode);

  return (
    <div className="App" data-theme={darkModeState ? "darkmode" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
