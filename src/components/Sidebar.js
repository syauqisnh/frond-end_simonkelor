import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { 
  SidebarData, 
  SidebarData_Admin,
  SidebarData_Dispacher,
  SidebarData_Pegawai, 
} from "./SidebarData";

import Logo from "../assets/images/1.png";
import { IconContext } from "react-icons/lib";
import AppMenu from "./AppMenu";

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
  position: absolute;
  transform: translateX(38px);
  top: 20px;
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
  @media screen and (max-width: 768px) {
    width: 80%;
    left: ${({ sidebar }) => (sidebar ? "0" : "-80%")};
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLogout = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 10pt;

  &:hover {
    background: #632ce4;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [user, setUser] = useState({});
  const [user_guest, setUser_guest] = useState("Guest");
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get('http://localhost:8000/api/datauser').then((response) => {
      setUser(response.data);
      setUser_guest("-"); 
    })

  }, [user, user_guest]);
  

  const LogoutHandler = async => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.post('http://localhost:8000/api/logout').then(() => {

      localStorage.removeItem("token");
      window.location.href = "/"; 
    })

  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIconback to="#">
            <FaIcons.FaAngleRight onClick={showSidebar} />
          </NavIconback>
        </Nav>
        <SidebarNav sidebar={sidebar ? "active" : ""}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaAngleLeft onClick={showSidebar} />
            </NavIcon>
            <li>
              <div className="logo">
                <Link to="/profile">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </li>
            {(() => { if(user_guest === "Guest") {
            return(
              <div className="nav-link-user">
                <span>Guest</span>
              </div>
              )
          }})()}
            
          {(() => { if(user.role === "Super Admin") {
            return(
              <div>
                <div className="nav-link-user">
                  <span> {user.nama_user} </span>
                </div>
                <div className="nav-link-jabatan">
                  <p> {user.role} </p>
                </div>
              </div>
              )
          }})()}
            
          {(() => { if(user.role === "Admin Dispacher") {
            return(
              <div>
                <div className="nav-link-user">
                  <span> {user.nama_user} </span>
                </div>
                <div className="nav-link-jabatan">
                  <p> {user.role} </p>
                </div>
              </div>
              )
          }})()}
            
          {(() => { if(user.role === "Pegawai") {
            return(
              <div>
                <div className="nav-link-user">
                  <span> {user.nama_user} </span>
                </div>
                <div className="nav-link-jabatan">
                  <p> {user.role} </p>
                </div>
              </div>
              )
          }})()}
            <hr className="hr" />

          {(() => { if(user_guest === "Guest") {
            return(
              <AppMenu items={SidebarData} />
              )
          }})()}

          {(() => { if(user.role === "Super Admin") {
            return(
              <div>
                <AppMenu items={SidebarData_Admin} />

                <hr className="hr"></hr>
              
                <SidebarLogout onClick={LogoutHandler}>
                  <div>
                    <BiIcons.BiLogOutCircle/>
                    <SidebarLabel>Logout</SidebarLabel>
                  </div>
                </SidebarLogout>
              </div>
              )
          }})()}

          {(() => { if(user.role === "Admin Dispacher") {
            return(
              <div>
                <AppMenu items={SidebarData_Dispacher} />

                <hr className="hr"></hr>
              
                <SidebarLogout onClick={LogoutHandler}>
                  <div>
                    <BiIcons.BiLogOutCircle/>
                    <SidebarLabel>Logout</SidebarLabel>
                  </div>
                </SidebarLogout>
              </div>
              )
          }})()}
          
          {(() => { if(user.role === "Pegawai") {
            return(
              <div>
                <AppMenu items={SidebarData_Pegawai} />

                <hr className="hr"></hr>
              
                <SidebarLogout onClick={LogoutHandler}>
                  <div>
                    <BiIcons.BiLogOutCircle/>
                    <SidebarLabel>Logout</SidebarLabel>
                  </div>
                </SidebarLogout>
              </div>
              )
          }})()}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}; 

export default Sidebar;
