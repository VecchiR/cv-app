import '../styles/index.css';
import { capitalizeFirstLetter } from '../utils';
import '../styles/Editor.css';


export default function SectionHeaderButton({ buttonText ,sectionName, handleHeaderClick }) {
  return (
    <button onClick={() => handleHeaderClick(sectionName)}>
      {buttonText}
    </button>
  );
}
