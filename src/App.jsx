import './styles/App.css';
import './styles/forms.css';
import './styles/sections.css';
import PersonalSection from './components/Personal section/PersonalSection.jsx';
import EducationSection from './components/Education section/EducationSection.jsx';
import ExperienceSection from './components/Experience section/ExperienceSection.jsx';
import Editor from './components/Editor.jsx';
import Section from './components/Section.jsx';
import CVButtons from './components/CVButtons.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [toClear, setToClear] = useState(false);
  const [toFillEx, setToFillEx] = useState(false);


  // Reset toClear and toFillEx after the sections are notified
  useEffect(() => {
    if (toClear) setToClear(false);
    if (toFillEx) setToFillEx(false);
  }, [toClear, toFillEx]);

  return (
    <>
      <CVButtons
        setToClear={setToClear}
        setToFillEx={setToFillEx}
      />
      <Editor
        toClear={toClear}
        toFillEx={toFillEx}
      />
    </>
  );
}

export default App;
