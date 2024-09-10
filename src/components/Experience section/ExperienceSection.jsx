import { useState } from 'react';
import '../../styles/index.css';
import '../../styles/sections.css';
import SectionButton from '../SectionButton';
import AddExperienceButton from './AddExperienceButton';

export default function ExperienceSection({ active, onClick }) {
  return (
    <div className="section experience-section">
      <SectionButton buttonText={'Experience'} onClick={onClick} />
      {active && <AddExperienceButton isVisible={active} />}
    </div>
  );
}
