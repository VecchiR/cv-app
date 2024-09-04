import { useState } from 'react';
import '../styles/index.css';
import EducationForm from './EducationForm.jsx';

export default function AddEducationButton({ isVisible }) {
  const [edit, setEdit] = useState(false);

  function handle() {
    setEdit(!edit);
  }

  const theButton = <button onClick={handle}>+ Education</button>;

  const theForm = <EducationForm isVisible={isVisible}/>;

  return !isVisible ? null : edit === false ? theButton : theForm;
}
