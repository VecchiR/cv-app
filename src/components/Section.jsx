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

  const handleAddNewEntry = () => {
    setIsEditing(true);
  };

  const handleEditEntry = (e) => {
    console.log(e);
    console.log('currentTarget: ', e.currentTarget); // get the div.entry-card
    setIsEditing(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
  }

  const handleSubmitForm = (e) => {
   e.preventDefault();
   const formData = {};
   for (let i =0; i < e.target.length - 2; i++) {
    // const pair = [];
    //  pair.push(e.target[i].labels[0].textContent);
    //  pair.push(e.target[i].value);
    //  formData.push(pair);

      
        // formData[e.target[i].name] = e.target[i].value;
        // formData.label =  e.target[i].labels[0].textContent;  // tentando sair do modo array pro modo objeto
        formData[ e.target[i].labels[0].textContent] = e.target[i].value;
   }
   
  //  LOGS FOR DEBUGGING:
   console.log(formData);
   console.log(entries);
   console.log([...entries, formData]);


    setEntries([...entries, formData]);
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
            <EntryCard key={index} entry={entry} handleClick={handleEditEntry} />
          ))}
          <AddEntryButton handleClick={handleAddNewEntry} />
        </>
      )}
    </div>
  );
}
