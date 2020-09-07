import React from 'react';
import envelope from '../../../../assets/img-icons/envelope.png';
import plus from '../../../../assets/img-icons/plus@3x.png';

function PlebsCard() {
  return (
    <div className="card plebs-card">
        <div className="flex-div center-align card-header">
            <img src={envelope} alt="envelope" />
            <h4>
                Invite Plebs
            </h4>
        </div>
        <div className="card-body">
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property plebs-img-1"></div>
                <div className="plebs-profile-info-div">
                    <div className="flex-div center-align">
                        <h5>Alexander Mahone</h5>
                    </div>
                    <p>
                        <span className="grey-text-color">FBI Special Junkie Agent at..</span>
                    </p>
                </div>
                <img src={plus} alt="plus" />
            </div>
            <div className="flex-div center-align admin-profile">
                <div className="admin-profile-img image-property plebs-img-2"></div>
                <div className="plebs-profile-info-div">
                    <div className="flex-div center-align">
                       <h5>Brad Bellick</h5>
                    </div>
                    <p>
                        <span className="grey-text-color">Fat Ass Officer at<span className="blue-text-color"> Fox
                            River</span>
                            </span>
                    </p>
                </div>
                <img src={plus} alt="plus" />
            </div>
        </div>
        <div className="card-footer">
            <a className="blue-text-color" href="!#"> View More</a>
        </div>
    </div>
  )
}


export default PlebsCard;
