import React, { useContext } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
import "../../src/styles.css";
//
import Saludo from "../components/Homeview/Saludo";
import PostListUser from "../components/Homeview/PostListUser";
//
//
import { auth } from "../config/Firebase";
import { useAuth } from "../contexts/AuthContext";

//

const MyPosts = () => {
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Check your posts!"} />
        <PostListUser />
      </div>
    </div>
  );
};

export default MyPosts;
