import { ReactNode, createContext, useReducer, Dispatch } from "react";
import { modalReducer, notesReducer, Notes, queryReducer, Query, ModalType } from "./Reducer";
import { NotesData } from "../lib/data";


type KeepNotesContext = {
    modalState: ModalType,
    modalDispatch: Dispatch<{ type: string; payload: any}>, 
    notesState: Notes[],
    notesDispatch: Dispatch<{ type: string, payload: any}>,
    queryState: Query,
    queryDispatch: Dispatch<{ type: string, payload: any}>,
};

const KeepNotesContext = createContext<KeepNotesContext>({} as KeepNotesContext);

const Context = ({ children } : { children: ReactNode}) => {

    const [modalState, modalDispatch] = useReducer(modalReducer, { 
        isOpen: false,
        title: "",
        content: "",
    });
    const [notesState, notesDispatch] = useReducer(notesReducer, NotesData);
    const [queryState, queryDispatch] = useReducer(queryReducer, {
        sort: "",
        search: "",
    })

    return <KeepNotesContext.Provider value={{ modalState, modalDispatch, notesState, notesDispatch, queryState, queryDispatch }}>
        {children}
    </KeepNotesContext.Provider>
}


export { Context, KeepNotesContext }