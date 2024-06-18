import React from "react";

const SidebarElement = (iconName, menuElementName) => {
  return (
    <>
      <ion-icon name={iconName}></ion-icon>
      <span className={sidebarState ? "" : "dissapear"}>{menuElementName}</span>
    </>
  );
};

export default SidebarElement;
