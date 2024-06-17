import React, { useState } from "react";
import "./sidebar.css";
// Se utilizó ion-icons https://ionic.io/ionicons

const Sidebar = ({ darkModeState, setDarkModeState }) => {
  // Estado para alterar el estilo de la sibedar. Classname condicional
  const [sidebarState, setSidebarState] = useState(true);
  const SessionAuth = false;

  const menuElements = [
    { id: 1, iconName: "home-outline", menuElementName: "Inicio" },
    {
      id: 2,
      iconName: "library-outline",
      menuElementName: "Mis publicaciones",
    },
    {
      id: 3,
      iconName: "list-outline",
      menuElementName: "Categorías",
    },
    {
      id: 4,
      iconName: "trending-up-outline",
      menuElementName: "Tendencias",
    },
    {
      id: 5,
      iconName: "people-outline",
      menuElementName: "Sobre nosotros",
    },
  ];

  return (
    <div className={sidebarState ? "sidebar" : "sidebar mini-sidebar"}>
      <div
        className="logo"
        onClick={() => {
          setSidebarState(!sidebarState);
        }}
      >
        <ion-icon name="globe-outline" />
        <span className={sidebarState ? "" : "dissapear"}>PRIME FORUM</span>
      </div>
      {/* Solo aparecerá al inicar sesión o no... */}
      <button className="button-sidebar">
        <ion-icon name="add-outline"></ion-icon>
        <span className={sidebarState ? "" : "dissapear"}>
          Nueva publicación
        </span>
      </button>
      <nav className="Navbar">
        <ul>
          {menuElements.map(({ id, iconName, menuElementName }) => {
            return (
              <li key={id}>
                <a>
                  <i></i>
                  <ion-icon name={iconName}></ion-icon>
                  <span className={sidebarState ? "" : "dissapear"}>
                    {menuElementName}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar-linea"></div>
      <div className="dark-mode-sidebar">
        <div className="info">
          <ion-icon name="moon-outline"></ion-icon>
          <span className={sidebarState ? "" : "dissapear"}>Modo oscuro</span>
        </div>
        <div
          className="switch-sidebar"
          onClick={() => {
            setDarkModeState(!darkModeState);
            console.log(darkModeState);
          }}
        >
          <div className="base">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
