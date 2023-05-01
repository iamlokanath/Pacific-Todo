import React from 'react'
import Logo from './image/logo.png'
import './SideNavbar.css'

const SideNavbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/" className="logo">
                            <img src={Logo} alt="logo" />
                            <span>Pacific Todo</span>
                        </a>
                    </li>
                    
                
                    <li>
                        <a href="/" className="list">
                            <i className="fas fa-home">
                                <span className="nav-item">Overview</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="list">
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
                        <a href="/" className="list">
                         <i class="fas fa-message">
                                <span className="nav-item">Chat</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="list">
                            <i className="fas fa-calendar">
                                <span className="nav-item">Calander</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="setting">
                            <i className="fas fa-cog">
                                <span className="nav-item">Settings</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="logout">
                            <i className="fas fa-sign-out-alt">
                                <span className="nav-item">Log Out</span>
                            </i>
                        </a>
                    </li>
                </ul>
             
            </nav>
        </>
    )
}

export default SideNavbar
