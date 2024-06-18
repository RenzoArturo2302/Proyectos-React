// Las listas de los elementos

const noAuth = [
  { id: 1, iconName: "home-outline", menuElementName: "Inicio" },
  //   {
  //     id: 2,
  //     iconName: "library-outline",
  //     menuElementName: "Mis publicaciones",
  //   },
  {
    id: 3,
    iconName: "search-outline",
    menuElementName: "Buscar",
  },
  {
    id: 4,
    iconName: "list-outline",
    menuElementName: "Categorías",
  },
  {
    id: 5,
    iconName: "people-outline",
    menuElementName: "Sobre Nosotros",
  },
  {
    id: 6,
    iconName: "information-outline",
    menuElementName: "Ayuda",
  },
];

const yesAuth = [
  { id: 1, iconName: "home-outline", menuElementName: "Inicio" },
  {
    id: 2,
    iconName: "library-outline",
    menuElementName: "Mis publicaciones",
  },
  {
    id: 3,
    iconName: "search-outline",
    menuElementName: "Buscar",
  },
  {
    id: 4,
    iconName: "list-outline",
    menuElementName: "Categorías",
  },
  {
    id: 5,
    iconName: "people-outline",
    menuElementName: "Sobre Nosotros",
  },
  {
    id: 6,
    iconName: "information-outline",
    menuElementName: "Ayuda",
  },
];

const menuList = (isAuth) => {
  if (isAuth) {
    return yesAuth;
  } else {
    return noAuth;
  }
};

export { menuList };
