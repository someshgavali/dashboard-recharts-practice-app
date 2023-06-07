import React from "react";
import "./Navbar.css";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className="home-header">
      <div className="home-header-left">
        <FormatAlignRightIcon className="navbarlogo" />
        <div className="navbar-search">
          <input type="search" placeholder="Search Here" />
          <SearchIcon className="searchIcon" />
        </div>
      </div>
      <div className="home-header-right">
        <GitHubIcon className="navbarlogo" />
        <NotificationsIcon className="navbarlogo" />
        <span className="userlogo ">
          <AccountCircleIcon className="navbarlogo" />
          Somesh
        </span>
      </div>
    </div>
  );
};

export default Navbar;
