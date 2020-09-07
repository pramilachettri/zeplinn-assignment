import React from 'react';
import mods from '../../../../assets/img-icons/mods@3x.png';
import crownz from '../../../../assets/img-icons/crownz@3x.png';

const AdminCard = (props) => {
  return (
    <div className="card admin-card">
        <div className="flex-div center-align card-header">
            <img src={mods} alt="mods"/>
            <h4>
                {props.text}
            </h4>
        </div>
        <div className="card-body">
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property admin-img-1"></div>
                <div className="admin-profile-info-div">
                    <div className="flex-div center-align">
                        <h5>Marcus Holloway</h5>
                        <span>
                            <img src={crownz} alt="crownz"/>
                        </span>
                    </div>
                    <p>
                        <span className="grey-text-color">Hacker and Vigilante at <span
                                className="blue-text-color">DedSec,
                                Inc</span>
                                </span>
                    </p>
                </div>
            </div>
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property admin-img-3"></div>
                <div className="admin-profile-info-div">
                    <div className="flex-div center-align">
                        <h5>Sitara Dhawan</h5>
                    </div>
                    <p>
                        <span className="grey-text-color">Founder and Hacker at<span className="blue-text-color">DedSec,
                                Inc</span>
                                </span>
                    </p>
                </div>
            </div>
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property admin-img-4"></div>
                <div className="admin-profile-info-div">
                    <div className="flex-div center-align">
                        <h5>Wrench</h5>
                    </div>
                    <p>
                        <span className="grey-text-color">Machinery Expert at<span className="blue-text-color">DedSec,
                            Inc</span>
                            </span>
                    </p>
                </div>
            </div>
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property admin-img-2"></div>
                <div className="admin-profile-info-div">
                    <div className="flex-div center-align">
                        <h5>Josh "Hawt Sauce" Sa..</h5>
                    </div>
                    <p>
                        <span className="grey-text-color">Nerdy Hacktivist at<span className="blue-text-color">DedSec,
                            Inc</span>
                            </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCard;