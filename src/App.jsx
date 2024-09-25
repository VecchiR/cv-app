import './styles/styleBundle.js';
import Editor from './components/Editor.jsx';
import CVButtons from './components/CVButtons.jsx';
import CVPreview from './components/CVPreview.jsx';
import { useState, useEffect } from 'react';


function App() {
  const [toClear, setToClear] = useState(false);
  const [toFillEx, setToFillEx] = useState(false);

  const [allEntries, setAllEntries] = useState({
    personal : {},
    education : [],
    experience : []
  });


  // Reset toClear and toFillEx after the sections are notified
  useEffect(() => {
    if (toClear) setToClear(false);
    if (toFillEx) setToFillEx(false);
  }, [toClear, toFillEx]);

  return (
    <>
      <div className="main-left-side">
        <CVButtons
          setToClear={setToClear}
          setToFillEx={setToFillEx}
        />
        <Editor
          toClear={toClear}
          toFillEx={toFillEx}
          allEntries={allEntries}
          setAllEntries={setAllEntries}
        />
      </div>
      <CVPreview
        allEntries={allEntries}
        setAllEntries={setAllEntries}
      />
    </>
  );
}

export default App;
