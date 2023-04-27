import React from "react";
import SubMenu from "./SubMenu";

const AppMenu = ({ items }) => {
  return (
    <>
      {items && items.map((item, index) => <SubMenu item={item} key={index} />)}
    </>
  );
};

export default AppMenu;
