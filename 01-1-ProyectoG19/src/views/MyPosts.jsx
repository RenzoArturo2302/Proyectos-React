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
import Swal from "sweetalert2";

const MyPosts = () => {
  const [postsUser, setPostsUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);

  const getPostUser = async () => {
    const posts = await obtenerDocumentoPorUser(currentUser.uid);

    setPostsUser(posts);
    setLoading(false);
  };

  const handleEliminar = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No serás capaz de recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    });

    if (result.isConfirmed) {
      await Swal.fire({
        title: "¡Éxito!",
        text: "¡Tu post ha sido editado!",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    try {
      getPostUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Check your posts!"} />

        <PostListUser
          postsUser={postsUser}
          loading={loading}
          handleEliminar={handleEliminar}
        />
      </div>
    </div>
  );
};

export default MyPosts;
