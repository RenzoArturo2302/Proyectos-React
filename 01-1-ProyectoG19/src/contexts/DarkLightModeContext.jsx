import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";

const DarkLightMode = createContext();

const DarkLightModeContext = (props) => {
  const [darkModeState, setDarkModeState] = useState(false);

  const valor = { darkModeState, setDarkModeState };
  // Verificar si ya existe un registre en el localState, si es así, se obtiene el valor y se asigna con useState
  useEffect(() => {
    const storage = getStorage("darkMode");

    if (storage) {
      setDarkModeState(storage);
    }
  }, []);
  // Guardar el estado en el local storage al variar el valor de darkModeState
  useEffect(() => {
    saveStorage("darkMode", darkModeState);
  }, [darkModeState]);

  return (
    <DarkLightMode.Provider value={valor}>
      {props.children}
    </DarkLightMode.Provider>
  );
};

export { DarkLightMode, DarkLightModeContext };
