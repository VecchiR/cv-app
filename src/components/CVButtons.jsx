import React from 'react';
import JsPDF from 'jspdf';

export default function CVButtons({setToClear, setToFillEx}) {

  const generatePDF = () => {
    const container = document.querySelector('.preview-container');
    const cv = new JsPDF('p', 'px', [container.offsetWidth, container.offsetHeight]);
    cv.html(document.querySelector('.preview-container')).then(() => {
      cv.save('cv.pdf');
    });
  };


  return (
    <div className="side-buttons-container">
      {/* <button onClick={generatePDF}>Export</button> */}
      <button onClick={() => window.print()}>Export</button>
      <button onClick={() => setToFillEx(true)}>Fill example</button>
      <button onClick={() => setToClear(true)}>Clear</button>
    </div>
  );
}
