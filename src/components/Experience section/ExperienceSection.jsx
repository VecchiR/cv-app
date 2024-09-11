import { useState } from 'react';
import '../../styles/index.css';
import '../../styles/sections.css';
import SectionHeaderButton from '../SectionHeaderButton';
import AddExperienceButton from './AddExperienceButton';

export default function ExperienceSection({ active, onClick }) {
  return (
    <div className="section experience-section">
      <SectionHeaderButton buttonText={'Experience'} onClick={onClick} />
      {active && <AddExperienceButton isVisible={active} />}
    </div>
  );
}
