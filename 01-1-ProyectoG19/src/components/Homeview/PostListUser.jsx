import React from "react";
import { Audio, ColorRing } from "react-loader-spinner";
const PostListUser = ({ postsUser, loading }) => {
  console.log(postsUser);
  return (
    <div className="user-post">
      <h2 className="reep">REVISE, EDITE o ELIMINE sus publicaciones</h2>
      {!loading && postsUser.length > 0
        ? postsUser.map((obj) => {
            return (
              <div className="container" key={obj.id}>
                <div className="image-container">
                  <img src={obj.src} alt="" />
                </div>
                <div className="contenido">
                  <div className="fondo"></div>
                  <div className="title-category-date">
                    <div className="category-date">
                      <h2 className="category">{obj.category}</h2>
                      <h3>{obj.date}</h3>
                    </div>
                    <h1 className="title">{obj.title}</h1>
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
          })
        : ""}
      {loading ? (
        <div className="loader">
          <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        ""
      )}
      {!loading & (postsUser.length == 0) ? (
        <div>Aún no ha creado publicaciones</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostListUser;
