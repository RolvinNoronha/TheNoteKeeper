
type Query = {
    sort: string,
    search: string,
}

type Notes = {
    title: string,
    content: string,
    date: string,
    time: Number,
}

type ModalType = {
    isOpen: boolean,
    title: string,
    content: string,
}

const modalReducer = (state : ModalType, action: any) => {

    switch(action.type) {

        case "OPEN_MODAL":
            return {...state, isOpen: true}
        case "CLOSE_MODAL":
            return {...state, isOpen: false, title: "", content: ""}
        case "NOTE_MODAL":
            return {...state, isOpen: true, title: action.payload.title, content: action.payload.content }
        default: 
            return state;
    }

}


const notesReducer = (state: Notes[], action: { type: string, payload: any}) => {
   
    switch(action.type) {
        case "ADD_NOTE":
            return [ ...state, {...action.payload} ];
        case "DELETE_NOTE": 
            return state.filter((note) => note.time !== action.payload);
        default:
            return state;
    }

}


const queryReducer = (state : Query, action: any) => {
    switch(action.type) {
        case "SORT_NOTES":
            return { ...state, sort: action.payload};
        case "SEARCH_QUERY":
            return { ...state, search: action.payload };
        case "RESET":
            return { ...state, sort: "", search: ""}
        default: 
            return state;
    }
}

export { modalReducer, notesReducer, queryReducer};
export type {Notes, Query, ModalType}
