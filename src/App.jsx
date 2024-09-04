import { useState } from 'react';
import './styles/App.css';
import './components/ContentStyleToggle.jsx';
import ContentStyleToggle from './components/ContentStyleToggle.jsx';
import CVButtons from './components/CVButtons.jsx';

function App() {
  return (
    <>
      <ContentStyleToggle />
      <hr />
      <CVButtons />
      <hr />
    </>
  );
}

export default App;
