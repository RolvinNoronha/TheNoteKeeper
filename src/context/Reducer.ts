import { type } from "os";


const modalReducer = (state : { isOpen: boolean}, action: { type : string}) => {

    switch(action.type) {

        case "OPEN_MODAL":
            return {...state, isOpen: true}
        case "CLOSE_MODAL":
            return {...state, isOpen: false}
        default: 
            return state;
    }

}

type Notes = {
    title: string,
    content: string,
}

const notesReducer = (state: Notes[], action: { type: string, payload: Notes}) => {
   
    switch(action.payload) {
        default:
            return state;
    }

}

export { modalReducer, notesReducer};
export type {Notes}