import { BsPlusSquareFill } from "react-icons/bs";
import { KeepNotesContext } from "../context/Context";
import { useContext } from "react";

const Header = () => {

    const { modalState: { isOpen }, modalDispatch} = useContext(KeepNotesContext);

    return (
        <header className="header">
            <div className="header__logo-box">
                <h1 className="header__title">Note Keeper</h1>
            </div>
            <input type="text" placeholder="search notes" className="header__search" />
            <button 
                onClick={() => modalDispatch({ type: "OPEN_MODAL" })} 
                className="header__button"
            >    
                <BsPlusSquareFill style={{ fontSize: "25px", marginRight: 10}} color="#526D82" />
                Add Note
            </button>
        </header>
    )
}

export default Header