import { useState } from 'react';

export default function AddEntryButton({handleClick}) {
  return <button onClick={() => handleClick()} className='add-entry-button'>Add Entry</button>;
}
