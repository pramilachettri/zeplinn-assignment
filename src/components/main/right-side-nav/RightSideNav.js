import React from 'react';
import AssociatedCard from './cards/AssociatedCard';
import AdminCard from './cards/AdminCard';
import PlebsCard from './cards/PlebsCard';
import { MODERATORS, ADMINS } from '../../../utils/constant';

function RightSideNav() {
  return (
    <div className="right-side-col">
      <AssociatedCard/>
      <AdminCard text={ADMINS}/>
      <AdminCard text={MODERATORS}/>
      <PlebsCard />
    </div>
  )
}

export default RightSideNav;