import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { KeepNotesContext } from "../context/Context";
import { Notes } from "../context/Reducer";

type Notetype = {
    note: Notes,
}

const Note = ({ note } : Notetype) => {

    const { notesDispatch } = useContext(KeepNotesContext);
    const { modalDispatch } = useContext(KeepNotesContext) 

    return (
        <div className="note">
            <h1 
                onClick={() => modalDispatch({ type: "NOTE_MODAL", payload: {title: note.title, content: note.content }})}
                className="note__title"
            >{note.title}</h1>
            <p className="note__content">{note.content.substring(0, 100) + "..."}</p>
            <div className="note__date">
                <p>{note.date}</p>
                <FaTrash 
                    style={{ fontSize: "25px", fill: "#526D82", cursor: "pointer"}}
                    onClick={() => notesDispatch({ type: "DELETE_NOTE", payload: note.time})}
                /> 
            </div>
        </div>
    )
}

export default Note