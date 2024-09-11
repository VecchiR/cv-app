import { useState } from 'react';
import SectionHeaderButton from './SectionHeaderButton';
import Form from './Form';
import AddEntryButton from './AddEntryButton';

export default function Section({
  sectionName,
  headerText,
  isActive,
  hasEntryCards,
  handleHeaderClick,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleAddEntry = () => {
    setIsEditing(true);
  };

  return (
    <div className={`section ${sectionName}-section`}>
      <SectionHeaderButton
        sectionName={sectionName}
        handleHeaderClick={handleHeaderClick}
        buttonText={headerText}
      />

      {/* Se ATIVO e NÃO tem entry cards -> mostra o form logo de cara */}
      {isActive && !hasEntryCards && <Form sectionName={sectionName}/>}

      {/* Se ATIVO e TEM entry cards e NÃO ESTA EDITANDO -> mostra ENTRY CARDS se houver e ADD ENTRY BUTTON  */}
      {isActive && hasEntryCards && !isEditing && <AddEntryButton handleClick={handleAddEntry}/>}

      {/* Se ATIVO e TEM entry cards e ESTÁ EDITANDO -> mostra só o FORM  */}
      {isActive && hasEntryCards && isEditing && <Form sectionName={sectionName}/>}
    </div>
  );
}
