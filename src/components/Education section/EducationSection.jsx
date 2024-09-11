import { useState } from 'react';
import '../../styles/index.css';
import '../../styles/sections.css';
import SectionHeaderButton from '../SectionHeaderButton';
import AddEducationButton from './AddEducationButton';

export default function EducationSection({ active, onClick }) {
  return (
    <div className="section education-section">
      <SectionHeaderButton buttonText={'Education'} onClick={onClick} />
      {active && <AddEducationButton isVisible={active} />}
    </div>
  );
}
