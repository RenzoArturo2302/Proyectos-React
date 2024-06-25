import React, { useEffect, useRef, useState } from "react";
import { getCategories } from "../../utils/categories";

const CreatePostForm = ({ dataPost, handleData }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const categories = getCategories();
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Para cambiar la altura del textarea
  useEffect(() => {
    const adjustHeight = (element) => {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    };

    if (textareaRef.current) {
      adjustHeight(textareaRef.current);
    }
  }, [text]);

  return (
    <div className="form-view">
      <div className="form-title">
        <label htmlFor="title">Título de la publicación</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Escribe el título..."
          value={dataPost.title}
          onChange={handleData}
          required
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
        <label htmlFor="">
          Seleccione una imagen como portada de la publicación
        </label>
        <button onClick={handleButtonClick}>Seleccione una imagen</button>
        <input type="file" ref={fileInputRef} />
      </div>
      <div>
        <label htmlFor="content">Ingrese el contenido de la publicación</label>
        <textarea
          ref={textareaRef}
          name="content"
          id="content"
          value={dataPost.content}
          onChange={(e) => {
            setText(e.target.value);
            handleData(e);
          }}
          rows="10"
          placeholder="Escribe algo..."
          className="auto-expand"
        ></textarea>
      </div>
      <div className="center">
        <button>Crear publicación</button>
      </div>
    </div>
  );
};

export default CreatePostForm;
