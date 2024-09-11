import { useState } from 'react';
import '../../styles/index.css';
import SectionHeaderButton from '../SectionHeaderButton';
import PersonalInfoForm from './PersonalInfoForm';

export default function PersonalSection({ active, onClick }) {
  return (
    <div className="section personal-section">
      <SectionHeaderButton buttonText="Personal Information" onClick={onClick} />
      {active && <PersonalInfoForm />}
    </div>
  );
}
