import React from 'react';
import '../LeftSideNav.css';

function TorumCard() {
  return (
    <div className="card torum-links-card">
      <ul>
          <li className="without-dot-li">
            T&Cs
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li className="without-dot-li">
            About Us
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li className="without-dot-li">
            Help Center
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li className="without-dot-li">
            Advertisements
          </li>
          <li>
            <div className="dot"></div>
          </li>
          <li className="without-dot-li">
            Advertise Here
          </li>
      </ul>
      <h5 className="blue-text-color">TORUM © 2020</h5>
  </div>
)
}

export default TorumCard;