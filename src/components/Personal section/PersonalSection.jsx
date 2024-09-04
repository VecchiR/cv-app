import { useState } from 'react';
import '../../styles/index.css';
import SectionButton from '../SectionButton';
import PersonalInfoForm from './PersonalInfoForm';

export default function PersonalSection() {
  const [isActive, setIsActive] = useState(false);

  function toggleSection() {
    setIsActive(!isActive);
  }

  return (
    <div className='section personal-section'>
      <SectionButton
        buttonText={'Personal Information'}
        handleClick={toggleSection}
      />
      <PersonalInfoForm isVisible={isActive}/>
    </div>
  );
}
