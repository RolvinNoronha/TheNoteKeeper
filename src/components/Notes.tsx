import { useContext } from "react";
import { KeepNotesContext } from "../context/Context";
import Modal from "./Modal";
import Note from "./Note";
import NoteModal from "./NoteModal";

const Notes = () => {

    

    const { modalState: { isOpen, title }} = useContext(KeepNotesContext);
    const { notesState } = useContext(KeepNotesContext);
    const { queryState: {sort, search}, queryDispatch } = useContext(KeepNotesContext);

    const ModifiedNotes = () => {
        let notes = notesState;

        if (sort !== "") {

            if (sort === "date") {
                notes.sort((a, b) => Number(a.time) - Number(b.time));
            }
            else if (sort === "title") {
                notes.sort((a, b) => a.title.localeCompare(b.title));
            }
        }

        if (search) {
            notes = notes.filter((note) => note.title.toLowerCase().includes(search));
        }

        return notes;
    }

    return (
        <div className="notes__container">
            <button 
                onClick={() => queryDispatch({ type: "SORT_NOTES", payload: "date"})}
                className="sort__button"
            >Sort By Date</button>
            <button 
                className="sort__button"
                onClick={() => queryDispatch({ type: "SORT_NOTES", payload: "title"})}
            >Sort By Title</button>
            
            {
                isOpen && title === "" ? <Modal /> : null
            }
            {
                isOpen && title !== "" ? <NoteModal /> : null
            }
                <div className="notes"  >
                    {ModifiedNotes().map(note => {
                        return <Note note={note} key={Number(note.time)} />
                    })}
                </div>
        </div>
    )
}

export default Notes