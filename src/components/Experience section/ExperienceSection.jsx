import { useState } from 'react';
import '../../styles/index.css';
import '../../styles/sections.css';
import SectionButton from '../SectionButton';
import AddExperienceButton from './AddExperienceButton';

export default function ExperienceSection() {
  const [isActive, setIsActive] = useState(false);

  function toggleSection() {
    setIsActive(!isActive);
  }

  return (
    <div className='section experience-section'>
      <SectionButton
        buttonText={'Experience'}
        handleClick={toggleSection}
      />
      <AddExperienceButton isVisible={isActive}/>
    </div>
  );
}
