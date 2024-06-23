import React, { useContext } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
const MyPosts = () => {
  const { sidebarState } = useContext(SidebarUnfolded);
  return <div className={sidebarState ? "page min-page" : "page"}>MyPosts</div>;
};

export default MyPosts;
