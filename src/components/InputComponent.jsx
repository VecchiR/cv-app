import '../styles/index.css';

export default function InputComponent({type, name = type, id = name, placeholder, labelText}) {
  return (
    <>
        <label htmlFor={name}><span className="label-text">{labelText}</span></label>
        <input type={type} name={name} id={id} placeholder={placeholder} />
    </>
  );
}