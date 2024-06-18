import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { DarkLightMode } from "../../contexts/DarkLightModeContext";
import { SidebarUnfolded } from "../../contexts/SidebarUnfoldedContext";
import { menuList } from "../../utils/menuElements";

// Se utilizó ion-icons https://ionic.io/ionicons

const Sidebar = () => {
  const { darkModeState, setDarkModeState } = useContext(DarkLightMode);
  // Estado para alterar el estilo de la sibedar. Classname condicional
  const { sidebarState, setSidebarState } = useContext(SidebarUnfolded);
  const [miniSidebarState, setMiniSidebarState] = useState(false);
  const [sessionAuth, setSessionAuth] = useState(false);

  const menuConditional = (sidebarState, miniSidebarState) => {
    if (!sidebarState && !miniSidebarState) {
      return "sidebar";
    } else if (sidebarState && miniSidebarState) {
      return "sidebar mini-sidebar max-barra-lateral";
    } else if (sidebarState && !miniSidebarState) {
      return "sidebar mini-sidebar";
    } else {
      return "sidebar max-barra-lateral";
    }
  };

  const menuElements = menuList(sessionAuth);

  return (
    <>
      <div
        className="menu"
        onClick={() => {
          setMiniSidebarState(!miniSidebarState);
        }}
      >
        <div className={miniSidebarState ? "change-display" : ""}>
          <ion-icon name="grid-outline"></ion-icon>
        </div>
        <div className={miniSidebarState ? "" : "change-display"}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
      {/* <div className={!sidebarState ? "sidebar" : "sidebar mini-sidebar"}> */}
      <div className={menuConditional(sidebarState, miniSidebarState)}>
        <div>
          <div
            className="logo"
            onClick={() => {
              setSidebarState(!sidebarState);
            }}
          >
            <ion-icon name="film-outline" />
            <span className={!sidebarState ? "" : "dissapear"}>
              PRIME MOVIES
            </span>
          </div>
          <button className="button-sidebar">
            <ion-icon name="add-outline"></ion-icon>
            <span className={!sidebarState ? "" : "dissapear"}>
              Nueva publicación
            </span>
          </button>
        </div>
        {/* Solo aparecerá al inicar sesión o no... */}

        <nav className="Navbar">
          <ul>
            {menuElements.map(({ id, iconName, menuElementName }) => {
              return (
                <li key={id}>
                  <a>
                    <i></i>
                    <ion-icon name={iconName}></ion-icon>
                    <span className={!sidebarState ? "" : "dissapear"}>
                      {menuElementName}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <div className="sidebar-linea"></div>
          <div className="dark-mode-sidebar">
            <div className="info">
              <ion-icon name="moon-outline"></ion-icon>
              <span className={!sidebarState ? "" : "dissapear"}>
                Modo oscuro
              </span>
            </div>
            <div
              className="switch-sidebar"
              onClick={() => {
                setDarkModeState(!darkModeState);
              }}
            >
              <div className="base">
                <div
                  className={darkModeState ? "circle prendido" : "circle"}
                ></div>
              </div>
            </div>
          </div>
          <div className="usuario">
            {sessionAuth ? (
              <>
                <img src="src/assets/img/news-800x500-3.jpg" alt="" />
                <div className="info-usuario">
                  <div className="nombre-email">
                    <span className="nombre">Renzo Arturo</span>
                    <span className="config">Configurar cuenta</span>
                  </div>

                  <ion-icon
                    name="log-out-outline"
                    onClick={() => {
                      setSessionAuth(false);
                    }}
                  ></ion-icon>
                </div>
              </>
            ) : (
              <>
                <div className="login-register">
                  <div
                    className="login"
                    onClick={() => {
                      setSessionAuth(true);
                    }}
                  >
                    <ion-icon name="log-in-outline"></ion-icon>
                    <span className={!sidebarState ? "" : "dissapear"}>
                      Iniciar Sesión
                    </span>
                  </div>
                  <div className="register">
                    <ion-icon name="person-add-outline"></ion-icon>
                    <span className={!sidebarState ? "" : "dissapear"}>
                      Registrarse
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
