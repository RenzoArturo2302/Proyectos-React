import React from "react";
import "./home-view.css";

const Saludo = ({ currentUser }) => {
  return (
    <div className="saludo-hv">
      {currentUser ? (
        <h1>
          <span className="username">{currentUser.displayName}</span>, Welcome
          to PRIME FORUM!
        </h1>
      ) : (
        <h1> Welcome to Prime Forum!</h1>
      )}
    </div>
  );
};

export default Saludo;
