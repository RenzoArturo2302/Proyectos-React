import React, { useContext, useEffect, useState } from "react";
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
import { obtenerTodosLosDocumentos } from "../utils/realTimeDatabaseFunctions";
const HomeView = () => {
  const data = getDataPost();
  const [dataPost, setDataPost] = useState([]);

  const getPosts = async () => {
    const allDocuments = await obtenerTodosLosDocumentos();
    console.log(allDocuments);
    setDataPost(allDocuments);
  };

  useEffect(() => {
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Welcome to PRIME FORUM!"} />
        <PostCard dataPost={dataPost} />
      </div>
    </div>
  );
};

export default HomeView;
