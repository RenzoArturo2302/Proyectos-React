import React, { useEffect, useRef, useState } from "react";

const CreatePostForm = ({ dataPost }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

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
        <label htmlFor="">Título de la publicación</label>
        <input type="text" placeholder="Escribe el título..." />
      </div>
      <div className="form-category">
        <label htmlFor="">Seleccione una categoría</label>
        <select name="" id="">
          <option value="" selected>
            Elige una opción
          </option>
          <option value="Naturaleza y Medio Ambiente">
            Naturaleza y Medio Ambiente
          </option>
          <option value="Tecnología">Tecnología</option>
          <option value="Política">Política</option>
          <option value="Social">Social</option>
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
        <label htmlFor="">Ingrese el contenido de la publicación</label>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
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
