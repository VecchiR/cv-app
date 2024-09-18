import { useState } from 'react';
import '../styles/index.css';

export default function InputComponent({
  type,
  name = type,
  id = name,
  placeholder = 'placeholder',
  labelText = 'label text',
  data,
}) {

  const [value, setValue] = useState(data ? data : '');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  console.log('THIS IS DATA:', data);

  return type === 'textarea' ? (
    <div className="input-container">
      <label htmlFor={name}>
        <span className="label-text">{labelText}</span>
      </label>
      <textarea name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange}></textarea>
    </div>
  ) : (
    <div className="input-container">
      <label htmlFor={name}>
        <span className="label-text">{labelText}</span>
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  );
}
