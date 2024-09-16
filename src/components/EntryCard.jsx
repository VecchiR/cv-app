import '../styles/index.css';

export default function EntryCard({ entry, handleClick }) {
  return (
    <div className="entry-card" onClick={handleClick}>
      {Object.entries(entry)
        .filter(([key]) => key !== 'id') // Filter out the 'id' field
        .map((pair, index) => (
          <div key={index}>
            <strong>{pair[0]}:</strong> {pair[1]}
          </div>
        ))}

      <div className="entry-card-actions">
        <button>Delete</button>
      </div>
    </div>
  );
}
