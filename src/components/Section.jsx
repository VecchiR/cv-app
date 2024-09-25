import { useState, useEffect } from "react";
import SectionHeaderButton from "./SectionHeaderButton";
import Form from "./Form";
import AddEntryButton from "./AddEntryButton";
import EntryCard from "./EntryCard";
import example from "../examples";
import '../styles/Editor.css';

export default function Section({
  sectionName,
  headerText,
  isActive,
  hasEntryCards,
  handleHeaderClick,
  toClear,
  toFillEx,
  allEntries,
  setAllEntries,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [entries, setEntries] = useState(
    hasEntryCards
      ? []
      : {
          fullname: "",
          email: "",
          linkedin: "",
          tel: "",
          location: "",
        }
  );
  const [entryIdCounter, setEntryIdCounter] = useState(1);
  const [entryToEdit, setEntryToEdit] = useState(null);

  // Effect to handle clearing the entries when toClear is true
  useEffect(() => {
    if (toClear) {
      setEntries(
        hasEntryCards
          ? [] // Resetting to empty array for sections with entry cards
          : {
              // Resetting to empty fields for personal info section
              fullname: "",
              email: "",
              linkedin: "",
              tel: "",
              location: "",
            }
      );
      setAllEntries({
        personal: {
          fullname: "",
          email: "",
          linkedin: "",
          tel: "",
          location: "",
        },
        education: [],
        experience: [],
      });
    }
  }, [toClear, hasEntryCards]);

  // Effect to handle filling example data when toFillEx is true
  useEffect(() => {
    if (toFillEx) {
      setEntries(
        hasEntryCards
          ? example[`${sectionName}`] // (Optional: You can add example entries for sections with cards)
          : example.personal
      );
      setAllEntries({...example});
    }
  }, [toFillEx, hasEntryCards]);

  const handleSoloEntryFormChange = (e) => {
    const updated = {...entries};
    updated[`${e.target.id}`] = e.target.value;
    setEntries(updated);

    const allUpdated = {...allEntries};
    allUpdated[sectionName] = updated;
    setAllEntries(allUpdated);
  };

  const handleAddNewEntry = () => {
    setIsEditing(true);
  };

  const handleEditEntry = (e) => {
    if (!e.target.matches("button")) {
      console.log(
        entries.filter(
          (x) =>
            x.id ===
            e.target.parentElement.parentElement.getAttribute("entryid")
        )[0]
      );

      const entryId = e.currentTarget.getAttribute("entryid");
      const matchingEntryIndex = entries.findIndex(
        (entry) => entry.id === entryId
      );

      if (matchingEntryIndex !== -1) {
        setEntryToEdit(entries[matchingEntryIndex]);
      } else {
        console.warn("No entry found with matching ID:", entryId);
      }

      setIsEditing(true);
    }
  };

  const handleDeleteEntry = (e) => {
    if (e.target.className === "delete-button") {
      console.log(
        entries.filter(
          (x) =>
            x.id ===
            e.target.parentElement.parentElement.getAttribute("entryid")
        )[0]
      );

      const entryId =
        e.target.parentElement.parentElement.getAttribute("entryid");
      const matchingEntryIndex = entries.findIndex(
        (entry) => entry.id === entryId
      );

      if (matchingEntryIndex !== -1) {
        const updated = [...entries]
          .slice(0, matchingEntryIndex)
          .concat(entries.slice(matchingEntryIndex + 1));
        setEntries(updated);

        const allUpdated = {...allEntries};
        allUpdated[sectionName] = updated;
        setAllEntries(allUpdated);

      } else {
        console.warn("No entry found with matching ID:", entryId);
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEntryToEdit(null);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = {};
    for (let i = 0; i < e.target.length - 2; i++) {
      formData[e.target[i].labels[0].textContent] = e.target[i].value;
    }
    
    let updatedEntries = [...entries];

    if (entryToEdit !== null) {
      formData["id"] = entryToEdit.id;
      const existingEntryIndex = entries.findIndex(
        (entry) => entry.id === entryToEdit.id
      );
      updatedEntries[existingEntryIndex] = formData;
      setEntries(updatedEntries);
      setEntryToEdit(null);
      setIsEditing(false);
    } else {
      formData["id"] = entryIdCounter.toString();
      updatedEntries = [...entries, formData];
      setEntries(updatedEntries);
      setEntryIdCounter(entryIdCounter + 1);
    }

    const allUpdated = {...allEntries};
    allUpdated[sectionName] = updatedEntries;
    setAllEntries(allUpdated);

    // console.log('LOGS FOR DEBUGGING:');
    // console.log('formData: ', formData);
    // console.log('entries: ', entries);
    // console.log('[...entries, formData]: ', [...entries, formData]);

    setEntryToEdit(null);
    setIsEditing(false);
  };

  return (
    <div className={`section ${sectionName}-section ${isActive? `active` : ''}`}>
      <SectionHeaderButton
        sectionName={sectionName}
        handleHeaderClick={handleHeaderClick}
        buttonText={headerText}
      />

      {/* Se ATIVO e NÃO tem entry cards -> mostra o form logo de cara */}
      {/* Se ATIVO e TEM entry cards e ESTÁ EDITANDO -> mostra só o FORM  */}
      {isActive && (!hasEntryCards || (hasEntryCards && isEditing)) && (
        <div className="section-bottom">
          <Form
            sectionName={sectionName}
            hasSubmitButton={hasEntryCards}
            handleSubmit={handleSubmitForm}
            handleCancel={handleCancel}
            entryToEdit={hasEntryCards ? entryToEdit : entries}
            onChange={hasEntryCards ? null : handleSoloEntryFormChange}
            toClear={toClear}
            toFillEx={toFillEx}
          />
        </div>
      )}

      {/* Se ATIVO e TEM entry cards e NÃO ESTA EDITANDO -> mostra ENTRY CARDS se houver e ADD ENTRY BUTTON  */}
      {isActive && hasEntryCards && !isEditing && (
        
          <div className="section-bottom">
            {entries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                handleClick={handleEditEntry}
                handleDelete={handleDeleteEntry}
                entryid={entry.id}
              />
            ))}
            <AddEntryButton handleClick={handleAddNewEntry} />
          </div>
        
      )}
    </div>
  );
}
