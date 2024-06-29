import React, { useContext, useEffect, useState } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";

//
import Saludo from "../components/Homeview/Saludo";

//
//
import { auth } from "../config/Firebase";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router";
//
import { obtenerDocumentoPorID } from "../utils/realTimeDatabaseFunctions";
import parse from "html-react-parser";
//
import { convertDateToLocal } from "../utils/utils";

const PostView = () => {
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  const { uid, id } = useParams();
  const [dataPost, setDataPost] = useState({
    title: "",
    src: "",
    category: "",
    date: "",
    content: "",
  });

  const getData = async () => {
    try {
      const data = await obtenerDocumentoPorID(uid, id);
      setDataPost(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        {/* <Saludo currentUser={currentUser} msg={"Know about this page!"} /> */}
        <div className="post-view">
          <h1>{dataPost.title}</h1>

          <h2>{dataPost.category}</h2>
          <h3>{convertDateToLocal(dataPost.date)}</h3>

          <div className="img-post">
            <img
              src={dataPost.src}
              style={{ maxWidth: "800px", height: "auto" }}
            />
          </div>
          <div className="content-post-view">{parse(dataPost.content)}</div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
