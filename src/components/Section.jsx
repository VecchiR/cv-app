import { useState } from 'react';
import SectionHeaderButton from './SectionHeaderButton';
import Form from './Form';
import AddEntryButton from './AddEntryButton';
import EntryCard from './EntryCard';

export default function Section({
  sectionName,
  headerText,
  isActive,
  hasEntryCards,
  handleHeaderClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState([]);
  const [entryIdCounter, setEntryIdCounter] = useState(1);

  const handleAddNewEntry = () => {
    setIsEditing(true);
  };

  const handleEditEntry = (e) => {
    if((!e.target.matches('button')))
    setIsEditing(true);
  };

  const handleDeleteEntry = (e) => {
    if (e.target.className === 'delete-button') {

      console.log(entries.filter((x) => x.id === e.target.parentElement.parentElement.getAttribute('entryid'))[0])
      
      const entryId = e.target.parentElement.parentElement.getAttribute('entryid');
      const matchingEntryIndex = entries.findIndex(entry => entry.id === entryId);
    
      if (matchingEntryIndex !== -1) {
        setEntries(entries.slice(0, matchingEntryIndex).concat(entries.slice(matchingEntryIndex + 1)));
      } else {
        console.warn("No entry found with matching ID:", entryId);
      }
      
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = {};
    for (let i = 0; i < e.target.length - 2; i++) {
      formData[e.target[i].labels[0].textContent] = e.target[i].value;
    }
    formData['id'] = entryIdCounter.toString();

    console.log('LOGS FOR DEBUGGING:');
    console.log('formData: ', formData);
    console.log('entries: ', entries);
    console.log('[...entries, formData]: ', [...entries, formData]);

    setEntries([...entries, formData]);
    setEntryIdCounter(entryIdCounter + 1);
    setIsEditing(false);
  };

  return (
    <div className={`section ${sectionName}-section`}>
      <SectionHeaderButton
        sectionName={sectionName}
        handleHeaderClick={handleHeaderClick}
        buttonText={headerText}
      />

      {/* Se ATIVO e NÃO tem entry cards -> mostra o form logo de cara */}
      {/* Se ATIVO e TEM entry cards e ESTÁ EDITANDO -> mostra só o FORM  */}
      {isActive && (!hasEntryCards || (hasEntryCards && isEditing)) && (
        <Form
          sectionName={sectionName}
          hasSubmitButton={hasEntryCards}
          handleSubmit={handleSubmitForm}
          handleCancel={handleCancel}
        />
      )}

      {/* Se ATIVO e TEM entry cards e NÃO ESTA EDITANDO -> mostra ENTRY CARDS se houver e ADD ENTRY BUTTON  */}
      {isActive && hasEntryCards && !isEditing && (
        <>
          {entries.map((entry, index) => (
            <EntryCard
              key={entry.id}
              entry={entry}
              handleClick={handleEditEntry}
              handleDelete={handleDeleteEntry}
              entryid={entry.id}
            />
          ))}
          <AddEntryButton handleClick={handleAddNewEntry} />
        </>
      )}
    </div>
  );
}
