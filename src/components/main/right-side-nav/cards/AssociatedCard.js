import React from 'react'
import '../RightSideNav.css';

function AssociatedCard() {
  return (
    <div className="card associated-card">
      <h4>Associated with</h4>
      <div className="associated-cover-img image-property">
      </div>
      <div className="card-body flex-div center-align">
          <div className="associated-img image-property"></div>
          <div className="associated-info-div">
              <h5>
                  DedSec,Inc
              </h5>
              <p className="blue-text-color">
                  @dedsec.inc
              </p>
          </div>
      </div>
      <div className="card-footer flex-div">
          <div className="flex-div center-align follower-div">
              <div className="blue-text-color">1,233</div>
              <div className="associated-grey-color">FOLLOWERS</div>
          </div>
          <div className="border-right"></div>
          <div className="flex-div center-align following-div">
              <div className="blue-text-color">99.9K</div>
              <div className="associated-grey-color">FOLLOWING</div>
          </div>
        </div>
    </div>
  )
}

export default AssociatedCard;