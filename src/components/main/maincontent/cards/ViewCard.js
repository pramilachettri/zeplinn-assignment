import React from 'react';
import menu from '../../../../assets/img-icons/menu_24px.png';
import view from '../../../../assets/img-icons/view.svg';
import '../MainContent.css';


function ViewCard() {
  return (
    <div className="card view-card flex-div center-align">
        <ul className="flex-div center-align">
            <li>
                <h3>
                  View
                </h3>
            </li>
            <li>
                <img src={menu} alt="menu" />
            </li>
            <li>
                <img src={view} alt="view" />
            </li>
        </ul>
        <button type="button">POST A THREAD</button>
    </div>
  )
}

export default ViewCard;
