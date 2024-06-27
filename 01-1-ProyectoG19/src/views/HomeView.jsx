import React, { useContext } from "react";
import "../../src/styles.css";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";

//
import Saludo from "../components/Homeview/Saludo";
import PostCard from "../components/Homeview/PostCard";
//
import { auth } from "../config/Firebase";
import { useAuth } from "../contexts/AuthContext";

//
import { getDataPost } from "../utils/dataPost";

const HomeView = () => {
  const data = getDataPost();
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Welcome to PRIME FORUM!"} />
        <PostCard data={data} />
      </div>
    </div>
  );
};

export default HomeView;
