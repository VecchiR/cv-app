import './styles/App.css';
import './styles/forms.css';
import './styles/sections.css';
import PersonalSection from './components/Personal section/PersonalSection.jsx';
import EducationSection from './components/Education section/EducationSection.jsx';
import ExperienceSection from './components/Experience section/ExperienceSection.jsx';
import Editor from './components/Editor.jsx';
import Section from './components/Section.jsx';
import CVButtons from './components/CVButtons.jsx';

function App() {
  return (
    <>
      <CVButtons />
      <Editor />
    </>
  );
}

export default App;
