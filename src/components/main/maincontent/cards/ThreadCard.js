import React from 'react';
import '../MainContent.css';

import messages from '../../../../assets/img-icons/messages.png';

const ThreadCard = (props) =>  {
  return (
    <div className="card thread-card">
       <div className="flex-div center-align">
            <div className={`image-property thread-img ${props.imageOne ? (`img-${props.imageNumber}`) : "vertical-align"}`}>
            {props.verticalAlign ? (<img src={messages} alt="no-image"/>) : ''}
           </div>
           <div className="thread-info-div">
               <div className="flex-div center-align thread-profile">
                  <div className="admin-profile-img image-property admin-img-4"></div>
                   <div className="thread-profile-info-div">
                       <div className="flex-div center-align">
                          <h5>{props.name}</h5>
                          <span>
                            <img src={props.image} alt="reddit"/>
                          </span>
                          <span>
                            {props.week}
                          </span>
                        </div>
                      <p>
                        <span className="grey-text-color">{props.job}</span> <span
                        className="blue-text-color">{props.company}</span>
                      </p>
                    </div>
                </div>
                <div className="flex-div center-align badge-div">
                  <span className={`badges ${props.annuoncement ? "background-red" : `${props.discussion ? "background-light-green" : ''}`}`}>
                    {props.annuoncement ? props.annuoncement : (props.discussion ? props.discussion : '')}
                  </span>
                  <div>
                    {props.claps ? <img src={props.claps} alt="claps"/> : ''}
                  </div>
                  <div>
                    {props.redditImage ? <img src={props.redditImage} alt="reddit"/> : ''}
                  </div>
                  <div>
                    {props.carImage ? <img src={props.carImage} alt="car"/> : ''}
                  </div>
                  <div>
                    {props.menImage ? <img src={props.menImage} alt="men"/> : ''}
                  </div>
                </div>
                <h3>
                {props.text}
                </h3>
                <ul className="desktop-list">
                   <li>
                      <img src={props.eyeImage}alt="eye"/>
                      {props.views}
                   </li>
                   <li>
                      <img src={props.num1Image}alt="num"/>
                      {props.reactions}
                   </li>
                   <li>
                      <img src={props.num2Image}alt="num"/>
                      {props.rules}
                   </li>
                </ul>
            </div>
        </div>
        <ul className="mobile-list">
           <li>
              <img src={props.eyeImage} alt="eye"/>
              {props.views}
            </li>
            <li>
              <img src={props.num1Image} alt="num"/>
              {props.reactions}
            </li>
            <li>
              <img src={props.num2Image} alt="num"/>
              {props.rules}
            </li>
        </ul>
    </div>
  )
}

export default ThreadCard;