import { useState } from 'react';
import '../../styles/index.css';
import SectionButton from '../SectionButton';
import PersonalInfoForm from './PersonalInfoForm';

export default function PersonalSection({ active, onClick }) {
  return (
    <div className="section personal-section">
      <SectionButton buttonText="Personal Information" onClick={onClick} />
      {active && <PersonalInfoForm />}
    </div>
  );
}
