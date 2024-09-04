import '../styles/index.css';
import '../styles/CVButtons.css';

export default function CVButtons() {
    return (
       <div className='side-buttons-container'>
        <button>Export</button>
        <button>Fill example</button>
        <button>Clear</button>
       </div>
    );
}