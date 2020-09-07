import React from 'react';
import '../LeftSideNav.css';
import fire from '../../../../assets/img-icons/fire (4)@3x.png'
import leftProfile from '../../../../assets/img-icons/left-profile-img.png'

function Profile() {
  return (
    <div className="card profile-info-card flex-div">
        <div className="image-property left-profile-img"></div>
        <div className="info-div">
            <h3>
             Iron I
            </h3>
            <p className="orange-text-color">
              <img src={fire} alt=""/>
              109 EKVAs
            </p>
            <p className="yellow-text-color">EXP 90/90</p>
            <div className="progress-div"></div>
        </div>
        <img className="badge-image" src={leftProfile} alt=""/>
    </div>
  )
}

export default Profile;
