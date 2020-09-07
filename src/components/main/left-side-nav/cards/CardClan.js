import React from 'react';
import membersnew from '../../../../assets/img-icons/membersnew@3x.png'
import '../LeftSideNav.css';


function CardClan() {
  return (
    <div className="card clain-card">
      <div className="flex-div center-align card-header">
          <img src={membersnew} alt=""/>
          <h4>
            Clan Statistics
          </h4>
      </div>
      <div>
          <p>
            Thread Count: 2,300
          </p>
          <p>
            Gift Count: 358
          </p>
      </div>
    </div>
  )
}

export default CardClan;