import React from 'react';
import ViewCard from './cards/ViewCard';
import ThreadCard from './cards/ThreadCard';
import { NAME, JOB, COMPANY, TEXT_RULES, VIEWS, REACTIONS, RULES, WEEK, HELP_RULES, ANNOUNCEMENT, THREE, GUIDE_TEXT,POST_TEXT,ONE ,FREEBIE_TEXT, NEW_TEXT, JUST_HERE, TWO, FOUR, DISCUSSION } from '../../../utils/constant';
import reddit from '../../../assets/img-icons/reddit (1)@3x.png';
import claps from '../../../assets/img-icons/claps.png';
import car from '../../../assets/img-icons/car.png';
import men from '../../../assets/img-icons/men.png';
import eye from '../../../assets/img-icons/eye (1)@3x.png';
import num1 from '../../../assets/img-icons/2136167@3x.png';
import num2 from '../../../assets/img-icons/1489300 (1)@3x.png';

export default function MainContent() {
  return (
    <div className="main-col">
      <ViewCard />
      <ThreadCard 
        name={NAME} imageOne={true} image={reddit} imageNumber={ONE} week={WEEK}job={JOB} company={COMPANY} annuoncement={ANNOUNCEMENT} claps={claps} redditImage={reddit} carImage={car} menImage={men} text={TEXT_RULES} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={RULES}  
      />

      <ThreadCard 
        name={NAME}  
        verticalAlign={true} week={WEEK}job={JOB} company={COMPANY} image={reddit} discussion={DISCUSSION} carImage={car} menImage={men} text={POST_TEXT} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={HELP_RULES}
      />

      <ThreadCard 
        name={NAME} image={reddit} verticalAlign={true} week={WEEK}job={JOB} company={COMPANY}  redditImage={reddit} carImage={car} menImage={men} text={FREEBIE_TEXT} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={JUST_HERE}
      />

      <ThreadCard 
        name={NAME} image={reddit} verticalAlign={true} week={WEEK}job={JOB} company={COMPANY} text={GUIDE_TEXT} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={NEW_TEXT}
      />

      <ThreadCard 
        name={NAME} image={reddit} week={WEEK}job={JOB}
        imageOne={true} imageNumber={TWO}
        company={COMPANY} redditImage={reddit} carImage={car} menImage={men} text={FREEBIE_TEXT} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={JUST_HERE}
      />

      <ThreadCard 
        name={NAME} image={reddit} week={WEEK} job={JOB} imageOne={true}
        imageNumber={THREE} company={COMPANY} text={GUIDE_TEXT} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={NEW_TEXT}
      />

      <ThreadCard 
        name={NAME} image={reddit} week={WEEK}job={JOB} imageOne={true}
        imageNumber={FOUR}company={COMPANY} annuoncement={ANNOUNCEMENT} claps={claps} redditImage={reddit} carImage={car} menImage={men} text={TEXT_RULES} eyeImage={eye} num1Image={num1} num2Image={num2} views={VIEWS} reactions={REACTIONS} rules={RULES}
      />
    </div>
  )
}
