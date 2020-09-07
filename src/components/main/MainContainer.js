import React from 'react';
import LeftSideNav from './left-side-nav/LeftSideNav';
import RightSideNav from './right-side-nav/RightSideNav';
import MainContent from './maincontent/MainContent';
import './MainContainer.css'

function MainContainer() {
  return (
    <div className="container flex-div">
      <LeftSideNav />
      <MainContent />
      <RightSideNav/>
    </div>
  )
}

export default MainContainer;
