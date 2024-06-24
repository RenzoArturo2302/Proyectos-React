import React from "react";

const PostCard = ({ data }) => {
  return (
    <div className="main-post-view">
      {data.map((obj) => {
        return (
          <div className="card" key={obj.id}>
            <img src={obj.src} alt="" />
            <div className="fondo"></div>
            <div className="metadatos">
              <div className="category-date">
                <h2 className="category">{obj.category}</h2>
                <h3 className="date">{obj.date}</h3>
              </div>
              <h1 className="titulo">{obj.tittle}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
