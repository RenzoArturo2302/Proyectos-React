import React, { useContext } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
import TestNotification from "../components/Prueba/TestNotification";
const CategoriesView = () => {
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <TestNotification />
    </div>
  );
};

export default CategoriesView;
