import formFields from '../formFields';
import InputComponent from './InputComponent';

export default function Form({ sectionName }) {
  const fields = formFields[sectionName];

  return (
    <form>
      {fields.map((field, index) => (
        <InputComponent
          key={index}
          type={field.type}
          name={field.name || field.type} // Fallback to 'type' if name is not provided
          placeholder={field.placeholder}
          labelText={field.labelText}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
