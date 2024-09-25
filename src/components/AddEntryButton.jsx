import { useState } from 'react';
import '../styles/index.css';
import '../styles/index.css';

export default function AddEntryButton({handleClick}) {
  return <button onClick={() => handleClick()} className='add-entry-button'>Add Entry</button>;
}
