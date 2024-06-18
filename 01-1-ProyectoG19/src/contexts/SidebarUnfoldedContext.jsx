import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";

const SidebarUnfolded = createContext();

const SidebarUnfoldedContext = (props) => {
  const [sidebarState, setSidebarState] = useState(false);

  const valor = { sidebarState, setSidebarState };

  useEffect(() => {
    const storage = getStorage("sidebar");
    if (storage) {
      setSidebarState(storage);
    }
  }, []);

  useEffect(() => {
    saveStorage("sidebar", sidebarState);
  }, [sidebarState]);

  return (
    <SidebarUnfolded.Provider value={valor}>
      {props.children}
    </SidebarUnfolded.Provider>
  );
};

export { SidebarUnfolded, SidebarUnfoldedContext };
