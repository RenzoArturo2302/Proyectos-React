import React from "react";

import Sidebar from "../components/Navbar/Sidebar";
const HomeView = ({ darkModeState, setDarkModeState }) => {
  return (
    <Sidebar
      darkModeState={darkModeState}
      setDarkModeState={setDarkModeState}
    />
  );
};

export default HomeView;
