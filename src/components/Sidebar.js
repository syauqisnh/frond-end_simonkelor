import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import Logo from "../assets/images/1.png";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem 1rem 1rem 1rem;
  transition: transform 1s;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const NavIconback = styled.div`
  position: absolute;
  transform: translateX(0px);
  top: 10px;
  right: 0;
  width: 40px;
  height: 60px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #311e69;
  outline: none;
  border: none;
  font-size: 2rem;
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
`;

const SidebarNav = styled.nav`
  background-color: #311e69;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIconback to="#">
            <FaIcons.FaAngleRight onClick={showSidebar} />
          </NavIconback>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaAngleLeft onClick={showSidebar} />
            </NavIcon>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-link-user">
              <span>Nama User</span>
            </div>
            <div className="nav-link-jabatan">
              <p>Nama jabatan</p>
            </div>
            <hr className="hr"/>
            ,
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
              
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
