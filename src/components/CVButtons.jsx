import '../styles/index.css';
import '../styles/CVButtons.css';

export default function ContentStyleToggle() {
    return (
       <div className='vertical-button-container'>
        <button>Export</button>
        <button>Fill example</button>
        <button>Clear</button>
       </div>
    );
}