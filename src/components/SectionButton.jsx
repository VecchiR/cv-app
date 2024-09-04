import '../styles/index.css';

export default function SectionButton({ buttonText, handleClick }) {
  return <button onClick={handleClick}>{buttonText}</button>;
}
