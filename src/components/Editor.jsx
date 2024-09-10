import { useState } from 'react';
import '../styles/index.css';
import EducationSection from './Education section/EducationSection';
import ExperienceSection from './Experience section/ExperienceSection';
import PersonalSection from './Personal section/PersonalSection';

export default function Editor() {
  const [activeSection, setActiveSection] = useState('personal');

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="editor-container">
      <PersonalSection
        active={activeSection === 'personal'}
        onClick={() => handleSectionClick('personal')}
      />
      <EducationSection
        active={activeSection === 'education'}
        onClick={() => handleSectionClick('education')}
      />
      <ExperienceSection
        active={activeSection === 'experience'}
        onClick={() => handleSectionClick('experience')}
      />
    </div>
  );
}
