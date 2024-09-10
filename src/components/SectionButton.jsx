import '../styles/index.css';

export default function SectionButton({ buttonText = 'section', onClick }) {
  return <button onClick={onClick}>{buttonText}</button>;
}
