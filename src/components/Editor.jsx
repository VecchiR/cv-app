import { useState } from 'react';
import '../styles/index.css';
import EducationSection from './Education section/EducationSection';
import ExperienceSection from './Experience section/ExperienceSection';
import PersonalSection from './Personal section/PersonalSection';
import Section from './Section';

export default function Editor() {
  const [activeSection, setActiveSection] = useState(null);

  const handleHeaderClick = (sectionName) => {
    setActiveSection(sectionName === activeSection ? null : sectionName);
  };

  return (
    <div className="editor-container">
      <Section
        sectionName={'personal'}
        headerText={'Personal Information'}
        isActive={activeSection === 'personal'}
        hasEntryCards={false}
        handleHeaderClick={handleHeaderClick}
      />
      <Section
        sectionName={'education'}
        headerText={'Education'}
        isActive={activeSection === 'education'}
        hasEntryCards={true}
        handleHeaderClick={handleHeaderClick}
      />
      <Section
        sectionName={'experience'}
        headerText={'Work Experience'}
        isActive={activeSection === 'experience'}
        hasEntryCards={true}
        handleHeaderClick={handleHeaderClick}
      />
    </div>
  );
}
