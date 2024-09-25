import '../styles/forms.css';
import '../styles/index.css';
import '../styles/Editor.css';


export default function FormButtons() {
  return (
    <div className="form-buttons-container">
      <button type="button" className="delete-button">
        Delete
      </button>
      <div className="right-buttons-group">
        <button type="button" className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </div>
  );
}
