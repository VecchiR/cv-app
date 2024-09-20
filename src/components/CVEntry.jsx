import '../styles/index.css';
import { useState, useEffect } from 'react';


export default function CVEntry() {
  return (
    <div className="entry-container">
        <div className="left-side">
            <p><span>START DATE</span> - <span>END DATE</span></p>
            <p>LOCATION</p>
        </div>
        <div className="right-side">
            <h3>INSTITUTION</h3>
            <p>TITLE</p>
            <p>DESCRIPTION</p>
        </div>
    </div>
  );
}
