import React, { useContext } from "react";
import "../../src/styles.css";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
import Saludo from "../components/Homeview/Saludo";
const HomeView = () => {
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <Saludo />
    </div>
  );
};

export default HomeView;
