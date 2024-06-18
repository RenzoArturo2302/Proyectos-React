import React, { useContext, useState } from "react";
import "./sidebar.css";
import { DarkLightMode } from "../../contexts/DarkLightModeContext";
import { SidebarUnfolded } from "../../contexts/SidebarUnfoldedContext";
// Se utilizó ion-icons https://ionic.io/ionicons

const Sidebar = () => {
  const { darkModeState, setDarkModeState } = useContext(DarkLightMode);
  // Estado para alterar el estilo de la sibedar. Classname condicional
  const { sidebarState, setSidebarState } = useContext(SidebarUnfolded);
  const SessionAuth = false;

  const menuElements = [
    { id: 1, iconName: "home-outline", menuElementName: "Inicio" },
    {
      id: 2,
      iconName: "library-outline",
      menuElementName: "Mis películas",
    },
    {
      id: 3,
      iconName: "list-outline",
      menuElementName: "Categorías",
    },
    {
      id: 4,
      iconName: "pricetags-outline",
      menuElementName: "Promociones",
    },
    {
      id: 5,
      iconName: "star-outline",
      menuElementName: "Novedades",
    },
    {
      id: 6,
      iconName: "trending-up-outline",
      menuElementName: "Tendencias",
    },
    {
      id: 7,
      iconName: "search-outline",
      menuElementName: "Buscar",
    },
    {
      id: 8,
      iconName: "information-outline",
      menuElementName: "Ayuda",
    },
    {
      id: 9,
      iconName: "people-outline",
      menuElementName: "Sobre Nosotros",
    },
  ];

  return (
    <>
      <div></div>
      <div className={!sidebarState ? "sidebar" : "sidebar mini-sidebar"}>
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
            {SessionAuth ? (
              <>
                <img src="src/assets/img/news-800x500-3.jpg" alt="" />
                <div className="info-usuario">
                  <div className="nombre-email">
                    <span className="nombre">Renzo Arturo</span>
                    <span className="email">renzoarturo12345@gmail.com</span>
                  </div>
                  <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </div>
              </>
            ) : (
              <>
                <div className="login-register">
                  <div className="login">
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
