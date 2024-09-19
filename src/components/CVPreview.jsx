import '../styles/index.css';
import CVEntry from './CVEntry';

export default function CVPreview() {
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
