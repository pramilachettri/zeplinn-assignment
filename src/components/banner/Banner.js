import React from 'react';
import './Banner.css';

import membersNew from '../../assets/img-icons/membersnew@3x.png';
import fire from '../../assets/img-icons/fire (4)@3x.png';
import calendar from '../../assets/img-icons/calendar (4)@3x.png';

function Banner() {
  return (
    <div className="sub-navbar">
        <div className="sub-navbar-width flex-div center-align">
            <div>
                <div className="flex-div mobile-flex">
                    <h2>
                        DedSec Clan
                    </h2>
                    <ul>
                        <li>
                            <img src={membersNew} alt="Members" />
                            <span className="blue-text-color">85,342</span>
                        </li>
                        <li>
                            <img src={fire} alt="Fire" />
                            <span className="orange-text-color">235,040,234</span>
                        </li>
                        <li>
                            <img src={calendar} alt="Calender" />
                            <span className="green-text-color">OCT 17, 2019</span>
                        </li>
                    </ul>
                </div>
                <p>
                    A secret society of hackers, serving our own brand of justice.
                    Be sure to check out our company profile <span className="blue-text-color">torum/dedsec.inc</span> for
                    more
                    official updates
                </p>
            </div>
            <button type="button">JOIN CLAN</button>
        </div>
    </div>
  )
}

export default Banner;
