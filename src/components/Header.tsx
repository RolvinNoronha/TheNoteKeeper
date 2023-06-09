import { BsPlusSquareFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {

    const [show, setShow] = useState(true);

    return (
        <>
        <header className="header">
            <div className="header__logo-box">
                <h1 className="header__title">Note Keeper</h1>
            </div>
            <input type="text" placeholder="search notes" className="header__search" />
            <button onClick={() => setShow(!show)} className="header__button">
                <BsPlusSquareFill style={{ fontSize: "25px", marginRight: 10}} color="#526D82" />
                Add Note
            </button>
        </header>
        {
            show && <Modal />
        }
        </>
    )
}

export default Header