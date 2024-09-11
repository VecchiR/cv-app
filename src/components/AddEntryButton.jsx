import { useState } from 'react';
import '../styles/index.css';

export default function AddEntryButton({handleClick}) {
  return <button onClick={() => handleClick()}>Add Entry</button>;
}
