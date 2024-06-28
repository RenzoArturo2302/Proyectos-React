import React, { useContext, useEffect, useState } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
import { Audio, ColorRing } from "react-loader-spinner";
import "../../src/styles.css";
//
import Saludo from "../components/Homeview/Saludo";
import PostListUser from "../components/Homeview/PostListUser";
//
//
import { auth } from "../config/Firebase";
import { useAuth } from "../contexts/AuthContext";
//
import { obtenerDocumentoPorUser } from "../utils/realTimeDatabaseFunctions";

const MyPosts = () => {
  const [postsUser, setPostsUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPostUser = async () => {
    const posts = await obtenerDocumentoPorUser(currentUser.uid);

    setPostsUser(posts);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getPostUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Check your posts!"} />

        <PostListUser postsUser={postsUser} loading={loading} />
      </div>
    </div>
  );
};

export default MyPosts;
