import { ReactNode, createContext, useReducer, Dispatch } from "react";
import { modalReducer, notesReducer, Notes } from "./Reducer";


type KeepNotesContext = {
    modalState: {isOpen: boolean},
    modalDispatch: Dispatch<{ type: string; }>, 
    notesState: Notes[],
    notesDispatch: Dispatch<{ type: string, payload: Notes}>,
}

const KeepNotesContext = createContext<KeepNotesContext>({} as KeepNotesContext);

const Context = ({ children } : { children: ReactNode}) => {

    const [modalState, modalDispatch] = useReducer(modalReducer, { isOpen: false })

    const [notesState, notesDispatch] = useReducer(notesReducer, [
        { title: "", content: ""}
    ])

    return <KeepNotesContext.Provider value={{ modalState, modalDispatch, notesState, notesDispatch }}>
        {children}
    </KeepNotesContext.Provider>
}


export { Context, KeepNotesContext }