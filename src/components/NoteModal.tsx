import { useContext } from "react";
import { KeepNotesContext } from "../context/Context";

const NoteModal = () => {
    
    const { modalState: {title, content }, modalDispatch } = useContext(KeepNotesContext) 

    return (
        <div id="myModal" className="modal">

            <div className="modal__content note__modal">
                <h1 className="note__title">{title}</h1>
                <p className="note__content note__modal-content">{content}</p>
                <div className="modal__buttons">
                    <button 
                        className="sort__button"
                        onClick={() => modalDispatch({ type: "CLOSE_MODAL", payload: null})}
                    >Close</button>
                </div>
            </div>

        </div>
    )
}

export default NoteModal