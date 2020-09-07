import React from 'react';
import './Navbar.css';

import logo from '../../assets/img-icons/logo.png';
import search from '../../assets/img-icons/search.svg';
import home from '../../assets/img-icons/home.png';
import companies from '../../assets/img-icons/companies.png';
import clans from '../../assets/img-icons/clans.png';
import missions from '../../assets/img-icons/missions.png';
import messages from '../../assets/img-icons/messages.png';
import notifications from '../../assets/img-icons/notifications.png';
import whiteMenu from '../../assets/img-icons/white-menu.svg';

function Navbar() {
  return (
    <div className="navbar">
        <div className="flex-div navbar-elements">
            <div className="flex-div center-align">
                <img className="logo-img" src={logo} alt="Some-logo"/>
                <div className="has-search position-relative">
                    <span className="search-img my-auto"> <img src={search} alt="search"/></span>
                    <input type="text" className="search-input" placeholder="Search..."/>
                </div>
            </div>
            <ul>
                <li>
                    <img src={home} alt="Home"/>
                    Home
                </li>
                <li>
                    <img src={companies} alt="Companies"/>
                    Companies
                </li>
                <li>
                    <img src={clans} alt="Some-clan"/>
                    Clans
                </li>
                <li>
                    <img src={missions} alt="Some-Mission" />
                    Missions
                </li>
                <li className="message-list">
                    <img src={messages} alt="Message" />
                    <div className="vertical-align">
                        4
                    </div>
                    Messages
                </li>
                <li className="notification-list">
                    <img src={notifications} alt="Notification"/>
                    <div className="vertical-align">
                        16
                    </div>
                    Notifications
                </li>
                <li>
                    <img src={clans} alt="Some-Clans"/>
                    Wallet
                </li>
            </ul>
            <div className="profile-img-div vertical-align">
                <div className="profile-img image-property"></div>
            </div>
            <img className="collapse-icon" src={whiteMenu} alt="MenuBar"/>
        </div>
    </div>
  )
}

export default Navbar;
