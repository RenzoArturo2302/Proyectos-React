import React, { useContext, useEffect, useState } from "react";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//
import { storageServiceImg } from "../utils/storageService";
//
import { crearDocumento } from "../utils/realTimeDatabaseFunctions";
//
import { mensajeToastConPromesa } from "../utils/utils";

const CreatePostView = () => {
  const { currentUser } = useAuth(auth);
  const { sidebarState } = useContext(SidebarUnfolded);
  const [buttonState, setButtonState] = useState(false);
  const [dataPost, setDataPost] = useState({
    title: "",
    src: "",
    category: "",
    date: null,
    content: "",
  });

  const navigate = useNavigate();
  const [image, setImage] = useState(dataPost.src);
  const handleData = (ev) => {
    const nombrePropiedad = ev.target.name;
    const valorPropiedad = ev.target.value;
    const data = {
      ...dataPost,
      [nombrePropiedad]: valorPropiedad,
    };

    setDataPost(data);
  };

  const handleImage = (ev) => {
    const file = ev.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecciona un archivo de imagen.");
        return;
      }
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function (e) {
        const img = new Image();

        img.src = e.target.result;

        img.onload = function () {
          if (this.width >= 800 || this.height >= 500) {
            setImage(e.target.result);
          } else {
            toast.error("La imagen debe tener dimensiones mayores a 800x500.", {
              autoClose: 1000,
            });
          }
        };
      };
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { title, category, content } = dataPost;
    //validando el formulario

    if (title === "" || category === "" || content === "") {
      toast.error("Faltan campos por llenar", { autoClose: 1000 });
      return;
    }
    if (image === "") {
      toast.error("No se ha seleccionado una imagen");
      return;
    }

    toast.info("Creando post", {
      autoClose: false,
      closeButton: false,
      hideProgressBar: true,
      toastId: "loading-toast",
    });
    setButtonState(true);
    const imageURL = await storageServiceImg(image, "imagePost");

    if (imageURL === "") {
      toast.dismiss("loading-toast");
      setButtonState(false);
      toast.error("Ha sucedido un error a la hora de subir la imagen");
      return;
    }

    let newPost = {
      ...dataPost,
    };

    newPost.src = imageURL;
    newPost.date = new Date();

    console.log(newPost);

    crearDocumento(newPost, currentUser.uid);
    toast.dismiss("loading-toast");

    await mensajeToastConPromesa("Post creado exitosamente", {
      autoClose: 500,
      type: "success",
    });

    setButtonState(false);
    navigate("/myPosts");
  };

  return (
    <div className={sidebarState ? "page min-page" : "page"}>
      <div className="home-view">
        <Saludo currentUser={currentUser} msg={"Create a new post!"} />
        <CreatePostForm
          dataPost={dataPost}
          handleData={handleData}
          image={image}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          buttonState={buttonState}
          setDataPost={setDataPost}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePostView;
