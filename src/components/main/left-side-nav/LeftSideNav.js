import React from 'react';
import Profile from './cards/ProfileCard';
import CardClan from './cards/CardClan';
import TagCard from './cards/TagCard';
import TorumCard from './cards/TorumCard'

export default function LeftSideNav() {
  return (
    <div className="left-side-col">
      <Profile />
      <CardClan/>
      <TagCard/>
      <TorumCard/>
    </div>
  )
}
