import "../styles/index.css";
import CVEntry from "./CVEntry";
import { useState, useEffect } from "react";

export default function CVPreview({ allEntries, setAllEntries }) {
  return (
    <div className="preview-container">
      <div className="personal-section">
        PERSONAL SECTION
        <h1>{allEntries.personal.fullname}</h1>
        <div>
          <p>{allEntries.personal.email}</p>
          <p>{allEntries.personal.phone}</p>
          <p>{allEntries.personal.linkedin}</p>
          <p>{allEntries.personal.location}</p>
        </div>
      </div>
      <div className="education-section">
        EDUCATION SECTION
        {allEntries.education.map((entryObj) => (
          <>
            <h2>EDUCATION</h2>
            <CVEntry
              institution={entryObj["Institution"]}
              title={entryObj["Degree"]}
              startDate={entryObj["Start date"]}
              endDate={entryObj["End date"]}
              location={entryObj["Location"]}
              entryId={entryObj["id"]}
            />
          </>
        ))}
      </div>
      <div className="experience-section">
        WORK EXPERIENCE SECTION
        {allEntries.experience.map((entryObj) => (
          <>
            <h2>EXPERIENCE</h2>
            <CVEntry
               institution={entryObj["Company name"]}
               title={entryObj["Position Title"]}
               startDate={entryObj["Start date"]}
               endDate={entryObj["End date"]}
               location={entryObj["Location"]}
               description={entryObj["Description"]}
               entryId={entryObj["id"]}
            />
          </>
        ))}
      </div>
    </div>
  );
}
