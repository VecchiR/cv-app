import { useState } from 'react';
import '../../styles/index.css';
import ExperienceForm from './ExperienceForm.jsx';

export default function AddExperienceButton({ isVisible }) {
  const [edit, setEdit] = useState(false);

  function handle() {
    setEdit(!edit);
  }

  const theButton = <button onClick={handle}>+ Experience</button>;

  const theForm = <ExperienceForm isVisible={isVisible}/>;

  return !isVisible ? null : edit === false ? theButton : theForm;
}
