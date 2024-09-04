import '../styles/index.css';

export default function InputComponent({
  type,
  name = type,
  id = name,
  placeholder = 'placeholder',
  labelText = 'label text',
}) {
  return type === 'textarea' ? (
    <div className="input-container">
      <label htmlFor={name}>
        <span className="label-text">{labelText}</span>
      </label>
      <textarea name={name} id={id} placeholder={placeholder}></textarea>
    </div>
  ) : (
    <div className="input-container">
      <label htmlFor={name}>
        <span className="label-text">{labelText}</span>
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
}
