import { capitalizeFirstLetter } from '../utils';


export default function SectionHeaderButton({ buttonText ,sectionName, handleHeaderClick }) {
  return (
    <button onClick={() => handleHeaderClick(sectionName)}>
      {buttonText}
    </button>
  );
}
