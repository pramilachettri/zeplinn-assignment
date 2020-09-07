import React from 'react';
import membersnew from '../../../../assets/img-icons/membersnew@3x.png'
import '../LeftSideNav.css';


function TagCard() {
    return (
        <div className="card tag-card">
            <div className="flex-div center-align card-header">
                <img src={membersnew}alt=""/>
                <h4>
                    Tags
                </h4>
            </div>
            <ul className="tag-list">
                <li>
                    <span className="background-red badges">
                        Announcement
                    </span>
                </li>
                <li>
                    <span className="background-light-green badges">
                        Discussion
                    </span>
                </li>
                <li>
                    <span className="background-dark-green badges">
                        General
                    </span>
                </li>

                <li>
                    <span className="background-mustard badges">
                        Question
                    </span>
                </li>

                <li>
                    <span className="background-orange badges">
                        Analysis
                    </span>
                </li>
                <li>
                    <span className="background-purple badges">
                        Market
                    </span>
                </li>

                <li>
                    <span className="background-blue badges">
                        Suggestion
                    </span>
                </li>
            </ul>
        </div>
   )
}

export default TagCard;