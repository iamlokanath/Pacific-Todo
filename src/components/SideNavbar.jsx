import React from "react";
import Logo from "./image/logo.png";
import "./SideNavbar.css";

// import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/home" className="logo">
              <img src={Logo} alt="logo" />
              <span>Pacific Todo</span>
            </a>
          </li>

          <li>
            <a href="/overview" className="list">
              <i className="fas fa-home">
                <span className="nav-item">Overview</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/stats" className="list">
              <i className="fas fa-chart-simple">
                <span className="nav-item">Stats</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/" className="list">
              <i className="fas fa-folder-open">
                <span className="nav-item">Projects</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/chat" className="list">
              <i className="fas fa-message">
                <span className="nav-item">Chat</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/calander" className="list">
              <i className="fas fa-calendar">
                <span className="nav-item">Calander</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/setting" className="setting">
              <i className="fas fa-cog">
                <span className="nav-item">Settings</span>
              </i>
            </a>
          </li>
          <li>
            <a href="/logout" className="logout">
              <i className="fas fa-sign-out-alt">
                <span className="nav-item">Log Out</span>
              </i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavbar;
