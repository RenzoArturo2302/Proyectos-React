import React, { useContext, useState } from "react";
import HomeView from "./views/HomeView";
import "./styles.css";
import { DarkLightMode } from "./contexts/DarkLightModeContext";
import { SidebarUnfolded } from "./contexts/SidebarUnfoldedContext";
import Navigation from "./views/Navigation";

const App = () => {
  const { darkModeState, setDarkModeState } = useContext(DarkLightMode);
  const { sidebarState, setSidebarState } = useContext(SidebarUnfolded);
  // console.log(darkModeState);
  return (
    <div className="App" data-theme={darkModeState ? "darkmode" : ""}>
      <Navigation />
      <div className={sidebarState ? "page min-page" : "page"}>
        <HomeView />
      </div>
    </div>
  );
};

export default App;
