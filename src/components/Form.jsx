import formFields from '../formFields';
import InputComponent from './InputComponent';


export default function Form({
  sectionName,
  hasSubmitButton,
  handleSubmit,
  handleCancel,
  entryToEdit = null,
  onChange = null,
  toClear,
  toFillEx
}) {
  const fields = formFields[sectionName];

  const dataProp = entryToEdit
    ? (field) => ({
        ...field,
        data: entryToEdit[`${hasSubmitButton ? field.labelText : field.id}`],
      })
    : (field) => field;

  return (
    <form onSubmit={handleSubmit} onChange={onChange ? onChange : undefined}>
      {fields.map((field, index) => (
        <InputComponent
          key={index}
          type={field.type}
          name={field.name || field.type} // Fallback to 'type' if name is not provided
          placeholder={field.placeholder}
          labelText={field.labelText}
          {...dataProp(field)} // Dynamically apply data prop based on entryToEdit
        />
      ))}
      {hasSubmitButton && (
        <>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
}
