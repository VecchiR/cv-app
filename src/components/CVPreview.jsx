import '../styles/index.css';
import CVEntry from './CVEntry';
import { useState, useEffect } from 'react';


export default function CVPreview({allEntries, setAllEntries}) {
    return (
        <div className="preview-container">
            <div className='personal-section'>
                <h1>FULL NAME</h1>
                <div>
                    <p>email</p>
                    <p>phone</p>
                    <p>linkedin</p>
                    <p>location</p>
                </div>
            </div>
            <div className="education-section">
                <h2>EDUCATION</h2>
                <CVEntry/>

            </div>
            <div className="experience-section">
                <h2>EXPERIENCE</h2>
                <CVEntry/>
            </div>
        </div>
    );
}
