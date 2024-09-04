import '../styles/index.css';

export default function SectionButton({ buttonText = 'section', handleClick }) {
  return <button onClick={handleClick}>{buttonText}</button>;
}
