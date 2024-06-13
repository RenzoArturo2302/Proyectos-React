import React, { useState } from "react";
import "./sidebar.css";
// Se utilizó ion-icons https://ionic.io/ionicons

const Sidebar = () => {
  // Estado para alterar el estilo de la sibedar. Classname condicional
  const [sidebarState, setSidebarState] = useState(true);
  const SessionAuth = false;

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
          <li>
            <a>
              <i></i>
              <ion-icon name="home-outline"></ion-icon>
              <span className={sidebarState ? "" : "dissapear"}>Inicio</span>
            </a>
          </li>
          <li>
            <a>
              <ion-icon name="library-outline"></ion-icon>
              <span className={sidebarState ? "" : "dissapear"}>
                Mis publicaciones
              </span>
            </a>
          </li>
          <li>
            <a>
              <ion-icon name="list-outline"></ion-icon>
              <span className={sidebarState ? "" : "dissapear"}>
                Categorías
              </span>
            </a>
          </li>
          <li>
            <a>
              <ion-icon name="trending-up-outline"></ion-icon>
              <span className={sidebarState ? "" : "dissapear"}>
                Tendencias
              </span>
            </a>
          </li>

          <li>
            <a>
              <ion-icon name="people-outline"></ion-icon>
              <span className={sidebarState ? "" : "dissapear"}>
                Sobre nosotros
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-linea"></div>
      <div className="dark-mode-sidebar">
        <div className="info">
          <ion-icon name="contrast-outline"></ion-icon>
          <span className={sidebarState ? "" : "dissapear"}>Modo oscuro</span>
        </div>
      </div>
      <div className="switch-sidebar">
        <div className="base">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
