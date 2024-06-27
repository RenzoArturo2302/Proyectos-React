import React, { useEffect, useRef, useState } from "react";
import { getCategories } from "../../utils/categories";
//
import MyEditor from "../../components/Homeview/MyEditor";

const CreatePostForm = ({
  dataPost,
  handleData,
  image,
  handleImage,
  handleSubmit,
  buttonState,
  handleContent,
}) => {
  // const [text, setText] = useState("");
  // const textareaRef = useRef(null);
  const categories = getCategories();
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Para cambiar la altura del textarea
  // useEffect(() => {
  //   const adjustHeight = (element) => {
  //     element.style.height = "auto";
  //     element.style.height = element.scrollHeight + "px";
  //   };

  //   if (textareaRef.current) {
  //     adjustHeight(textareaRef.current);
  //   }
  // }, [text]);

  return (
    <div className="form-view">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <label htmlFor="title">Título de la publicación</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Escribe el título..."
            value={dataPost.title}
            onChange={handleData}
          />
        </div>
        <div className="form-category">
          <label htmlFor="category">Seleccione una categoría</label>
          <select
            name="category"
            id="category"
            defaultValue={dataPost.category}
            onChange={handleData}
          >
            {categories.map((obj) => {
              return (
                <option value={obj.value} key={obj.id}>
                  {obj.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-image">
          <label>
            Seleccione una imagen como portada de la publicación
            <p>Aviso: Se recomiendan dimensiones superiores a 800x500</p>
          </label>
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={buttonState}
          >
            Seleccione una imagen
          </button>
          <input type="file" ref={fileInputRef} onChange={handleImage} />
          {image && (
            <div className="img-prev">
              <label>Previsualización:</label>
              <img
                src={image}
                alt="Previsualización"
                style={{ maxWidth: "800px", height: "auto" }}
              />
            </div>
          )}
        </div>

        <div className="form-editor-label">
          <label>Ingrese el contenido de la publicación</label>
        </div>
        <div className="form-my-editor">
          <MyEditor value={dataPost.content} handleContent={handleContent} />
        </div>
        <div className="center">
          <button type="submit" disabled={buttonState}>
            Crear publicación
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
