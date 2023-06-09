import { useContext } from "react";
import { KeepNotesContext } from "../context/Context";
import Modal from "./Modal";

const Notes = () => {

    const { modalState: { isOpen }} = useContext(KeepNotesContext);

    return (
        <div className="notes__container">
            <button className="sort__button">Sort By Date</button>
            <button className="sort__button">Sort By Date</button>
            {
                isOpen && <Modal />
            }
            <div className="notes">
                
            </div>
        </div>
    )
}

export default Notes