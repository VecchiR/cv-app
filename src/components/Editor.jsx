import { useState } from 'react';
import '../styles/index.css';
import EducationSection from './Education section/EducationSection';
import ExperienceSection from './Experience section/ExperienceSection';
import PersonalSection from './Personal section/PersonalSection';

export default function Editor() {
    const [active, setActive] = useState('personal'); // begin with 'personal', but can be 'education' or 'experience' as well

  return (
    <div className='editor-container'>
        <PersonalSection/>
        <EducationSection/>
        <ExperienceSection/>
    </div>
  );
}