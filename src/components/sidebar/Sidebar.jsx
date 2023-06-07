import React from "react";
import "./Sidebar.css";
import BashBoardLogo from "../../assets/dashboard.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import RegistrationIcon from "@mui/icons-material/AppRegistration";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { TbShadow } from "react-icons/tb";
import InterestsIcon from "@mui/icons-material/Interests";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebar-top">
          <h2 className="Logo">SOMESH </h2>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <a to="/" className="link">
              <li className="sidebarListItem active">
                <DashboardIcon className="sidebarIcon" />
                DashBoard
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Authentication</h3>
          <ul className="sidebarList">
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <LoginIcon className="sidebarIcon" />
                Login
              </li>
            </a>
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <RegistrationIcon className="sidebarIcon" />
                Register
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Utilities</h3>
          <ul className="sidebarList">
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <TypeSpecimenIcon className="sidebarIcon" />
                Typography
              </li>
            </a>
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <ColorLensIcon className="sidebarIcon" />
                Color
              </li>
            </a>
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <TbShadow className="sidebarIcon" />
                Shadow
              </li>
            </a>
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <InterestsIcon className="sidebarIcon" />
                Ant Icons
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Utilities</h3>
          <ul className="sidebarList">
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <ContactPageIcon className="sidebarIcon" />
                Contact Page
              </li>
            </a>
            <a to="/" className="link">
              <li className="sidebarListItem ">
                <DocumentScannerIcon className="sidebarIcon" />
                Documentations
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
