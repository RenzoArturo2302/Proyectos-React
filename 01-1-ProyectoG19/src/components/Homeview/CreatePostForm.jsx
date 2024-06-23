import React, { useState } from "react";

const CreatePostForm = () => {
  const [dataPost, setDataPost] = useState({
    email: "",
    password: "",
  });

  return <div className="form-view">CreatePostForm</div>;
};

export default CreatePostForm;
