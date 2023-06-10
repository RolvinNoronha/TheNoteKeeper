import { KeepNotesContext } from "../context/Context";
import { useState, useContext } from "react";
import { Notes } from "../context/Reducer";

const Modal = () => {

    const { modalDispatch } = useContext(KeepNotesContext)
    const { notesDispatch } = useContext(KeepNotesContext);
    const [note, setNote] = useState<Notes>({ title: "", content: "", date: "", time: 0})

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const handleChange = (e : any) => {
        const {id, value} = e.target;

        setNote(prevNote => ({
            ...prevNote,
            [id]: value,
            date: day + "/" + month + "/" + year,
            time: Date.now(),
        }))
    }

    const handleClick = () => {

        notesDispatch({ type: "ADD_NOTE", payload: note})

        setNote({ title: "", content: "", date: "", time: 0});
        modalDispatch({ type: "CLOSE_MODAL", payload: null })
    }

    return (
        <div id="myModal" className="modal">

            <div className="modal__content">
                <label htmlFor="title">Title:</label>
                <input 
                    onChange={handleChange}
                    value={note.title}
                    className="modal__input" 
                    id="title"
                ></input>
                <label htmlFor="content">Content:</label>
                <textarea 
                    onChange={handleChange}
                    value={note.content}
                    style={{ maxWidth: "90%"}} 
                    className="modal__input" 
                    id="content"
                ></textarea>
                <div className="modal__buttons">
                    <button 
                        className="sort__button"
                        onClick={() => modalDispatch({ type: "CLOSE_MODAL", payload: null})}
                    >Cancel</button>
                    <button 
                        disabled={!note.title && !note.content}
                        onClick={handleClick}
                        className="add__button"
                    >Add</button>
                </div>
            </div>

        </div>
    )
}

export default Modal