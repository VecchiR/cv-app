import formFields from '../formFields';
import InputComponent from './InputComponent';

export default function Form({
  sectionName,
  hasSubmitButton,
  handleSubmit,
  handleCancel,
  entryToEdit = null,
}) {
  const fields = formFields[sectionName];

  if (entryToEdit !== null) {
    return (
      <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <InputComponent
          key={index}
          type={field.type}
          name={field.name || field.type} // Fallback to 'type' if name is not provided
          placeholder={field.placeholder}
          labelText={field.labelText}
          data={entryToEdit[`${field.labelText}`]}
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
  else {
    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <InputComponent
            key={index}
            type={field.type}
            name={field.name || field.type} // Fallback to 'type' if name is not provided
            placeholder={field.placeholder}
            labelText={field.labelText}
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
}
