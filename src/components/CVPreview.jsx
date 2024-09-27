import CVEntry from "./CVEntry";
import { useState, useEffect } from "react";

export default function CVPreview({ allEntries, setAllEntries }) {
  return (
    <div className="preview-container">
      <div className="personal-section">
        <h1>{allEntries.personal.fullname}</h1>
        <div>
          <p>{allEntries.personal.email}</p>
          <p>{allEntries.personal.phone}</p>
          <p>{allEntries.personal.linkedin}</p>
          <p>{allEntries.personal.location}</p>
        </div>
      </div>
      <div className="education-section">
        <h2>EDUCATION</h2>
        {allEntries.education.map((entryObj) => (
          <>
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
        <h2>EXPERIENCE</h2>
        {allEntries.experience.map((entryObj) => (
          <>
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
