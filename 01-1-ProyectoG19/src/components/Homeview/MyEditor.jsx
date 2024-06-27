import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const MyEditor = ({ initialContent, setContent }) => {
  const [editorContent, setEditorContent] = useState(initialContent);
  const editorRef = useRef(null);

  // Actualizar el contenido inicial cuando cambie la prop initialContent
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(initialContent);
      setEditorContent(initialContent); // Actualizar el estado local editorContent
    }
  }, [initialContent]);

  const handleEditorInit = (evt, editor) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (content) => {
    setContent(content);
  };

  return (
    <Editor
      onInit={handleEditorInit}
      apiKey="6vqp473ek00d81ls763t94rjboowd1ltr9xyv7pwbx2aaqon"
      initialValue={initialContent}
      value={editorContent}
      onEditorChange={handleEditorChange}
      init={{
        selector: "textarea",
        menubar: false,
        plugins:
          "anchor autolink charmap codesample  image link lists media searchreplace  visualblocks  checklist mediaembed casechange export formatpainter pageembed linkchecker   permanentpen powerpaste advtable advcode editimage advtemplate mentions  tableofcontents   autocorrect  inlinecss markdown",
        toolbar:
          " | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        image_advtab: true, // Habilitar la pestaña avanzada de imágenes

        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
    />
  );
};

export default MyEditor;
