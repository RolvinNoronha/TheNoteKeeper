import { KeepNotesContext } from "../context/Context";
import { useContext } from "react";


const Modal = () => {

    const { modalDispatch } = useContext(KeepNotesContext)

    return (
        <div id="myModal" className="modal">

            <div className="modal__content">
                <label htmlFor="title">Title:</label>
                <input className="modal__input" id="title"></input>
                <label htmlFor="content">Content:</label>
                <textarea style={{ maxWidth: "90%"}} className="modal__input" id="content"></textarea>
                <div className="modal__buttons">
                    <button 
                        className="sort__button"
                        onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
                    >Cancel</button>
                    <button className="add__button">Add</button>
                </div>
            </div>

        </div>
    )
}

export default Modal