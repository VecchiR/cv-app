import { useState } from 'react';
import '../styles/index.css';
import '../styles/sections.css';
import SectionButton from './SectionButton';
import AddEducationButton from './AddEducationButton';

export default function EducationSection() {
  const [isActive, setIsActive] = useState(false);

  function toggleSection() {
    setIsActive(!isActive);
  }

  return (
    <div className='section education-section'>
      <SectionButton
        buttonText={'Education'}
        handleClick={toggleSection}
      />
      <AddEducationButton isVisible={isActive}/>
    </div>
  );
}
