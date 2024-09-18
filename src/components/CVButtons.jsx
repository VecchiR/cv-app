import '../styles/index.css';
import '../styles/CVButtons.css';

export default function CVButtons({setToClear, setToFillEx}) {
  return (
    <div className="side-buttons-container">
      <button>Export</button>
      <button onClick={() => setToFillEx(true)}>Fill example</button>
      <button onClick={() => setToClear(true)}>Clear</button>
    </div>
  );
}
