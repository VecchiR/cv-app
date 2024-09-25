import { useState, useEffect } from 'react';
import Section from './Section';


export default function Editor({ toClear, toFillEx, allEntries, setAllEntries }) {
  const [activeSection, setActiveSection] = useState(null);

  const handleHeaderClick = (sectionName) => {
    setActiveSection(sectionName === activeSection ? null : sectionName);
  };


  useEffect(() => {
    if (toClear) {
      setActiveSection(null);
    }
  }, [toClear]);

  useEffect(() => {
    if (toFillEx) {
      setActiveSection(null);
    }
  }, [toFillEx]);

  return (
    <div className="editor-container">
      <Section
        sectionName={'personal'}
        headerText={'Personal Information'}
        isActive={activeSection === 'personal'}
        hasEntryCards={false}
        handleHeaderClick={handleHeaderClick}
        toClear={toClear}
        toFillEx={toFillEx}
        allEntries={allEntries}
        setAllEntries={setAllEntries}
      />
      <Section
        sectionName={'education'}
        headerText={'Education'}
        isActive={activeSection === 'education'}
        hasEntryCards={true}
        handleHeaderClick={handleHeaderClick}
        toClear={toClear}
        toFillEx={toFillEx}
        allEntries={allEntries}
        setAllEntries={setAllEntries}

      />
      <Section
        sectionName={'experience'}
        headerText={'Work Experience'}
        isActive={activeSection === 'experience'}
        hasEntryCards={true}
        handleHeaderClick={handleHeaderClick}
        toClear={toClear}
        toFillEx={toFillEx}
        allEntries={allEntries}
        setAllEntries={setAllEntries}

      />
    </div>
  );
}
