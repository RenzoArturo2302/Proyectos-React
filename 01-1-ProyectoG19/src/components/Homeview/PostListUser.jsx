import React from "react";
import { getDataPost } from "../../utils/dataPost";
const PostListUser = () => {
  const data = getDataPost();

  return (
    <div className="user-post">
      <h2 className="reep">REVISE, EDITE o ELIMINE sus publicaciones</h2>
      {data.map((obj) => {
        return (
          <div className="container" key={obj.id}>
            <img src={obj.src} alt="" />

            <div className="contenido">
              <div className="fondo"></div>
              <div className="title-category-date">
                <h1 className="title">{obj.tittle}</h1>
                <div className="category-date">
                  <h2 className="category">{obj.category}</h2>
                  <h3>{obj.date}</h3>
                </div>
              </div>
              <div className="edit-eliminate">
                <button>
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button>
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostListUser;
