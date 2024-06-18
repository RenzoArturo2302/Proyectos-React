import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles principal
import "./styles.css";
import { DarkLightModeContext } from "./contexts/DarkLightModeContext.jsx";
import { SidebarUnfoldedContext } from "./contexts/SidebarUnfoldedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkLightModeContext>
      <SidebarUnfoldedContext>
        <App />
      </SidebarUnfoldedContext>
    </DarkLightModeContext>
  </React.StrictMode>
);
