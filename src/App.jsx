import './styles/App.css';
import ContentStyleToggle from './components/ContentStyleToggle.jsx';
import CVButtons from './components/CVButtons.jsx';
import PersonalInfoForm from './components/PersonalInfoForm.jsx';

function App() {
  return (
    <>
      <ContentStyleToggle />
      <hr />
      <CVButtons />
      <hr />
      <PersonalInfoForm />
    </>
  );
}

export default App;
