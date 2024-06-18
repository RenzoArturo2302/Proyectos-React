import React, { useContext } from "react";
import "../../src/styles.css";
import {
  SidebarUnfolded,
  SidebarUnfoldedContext,
} from "../contexts/SidebarUnfoldedContext";

const Prueba = (props) => {
  const { sidebarState, setSidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>aaaaaaaaa</div>
  );
};

export default Prueba;
