import React, { useContext, useState } from "react";
import { SidebarUnfolded } from "../contexts/SidebarUnfoldedContext";
import "../../src/styles.css";
//
import Saludo from "../components/Homeview/Saludo";
import CreatePostForm from "../components/Homeview/CreatePostForm";
//
//
import { auth } from "../config/Firebase";
import { useAuth } from "../contexts/AuthContext";

//

const CreatePostView = () => {
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);

  const [dataPost, setDataPost] = useState({
    src: "https://loremflickr.com/640/480/fashion",
    title: "",
    category: "",
    date: new Date(),
    content: "",
  });

  const handleData = (ev) => {
    console.log(ev.target.name);
    const nombrePropiedad = ev.target.name;
    const valorPropiedad = ev.target.value;
    const data = {
      ...dataPost,
      [nombrePropiedad]: valorPropiedad,
    };

    setDataPost(data);
  };

  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Create a new post!"} />
        <CreatePostForm dataPost={dataPost} handleData={handleData} />
      </div>
    </div>
  );
};

export default CreatePostView;
