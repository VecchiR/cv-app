import '../styles/index.css';
import { useState, useEffect } from 'react';


export default function CVEntry({institution,
  title,
  startDate,
  endDate,
  location,
  description,
  entryId,}) {
  return (
    <div className="entry-container" key={entryId}>
        <div className="left-side">
            <p><span>{startDate}</span> - <span>{endDate}</span></p>
            <p>{location}</p>
        </div>
        <div className="right-side">
            <h3>{institution}</h3>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
  );
}
