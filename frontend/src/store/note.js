import { csrfFetch } from './csrf'
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES'
const GET_NOTE = 'notes/GET_NOTE'
const ADD_NOTE = 'notes/ADD_NOTE'
const EDIT_NOTE = 'notes/EDIT_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

//Gets all notes
const getNotes = list => ({
    type: GET_ALL_NOTES,
    list,
})

export const getAllNotes = () => async (dispatch) => {
    const response = await csrfFetch(`/api/notes`);
    console.log("Response", response)

    if (response.ok) {
        const notes = await response.json();
        dispatch(getNotes(notes));
    }
};

// get a note function
const getOneNote = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/notes/${id}`)
    if (res.ok) {
        const note = await res.json();
        if (note) {
            dispatch(getNotes(note))
        }
    }
}
//------------------------------------------------------------------
//Adds a note
const addNote = note => ({
    type: ADD_NOTE,
    note,
})
// add note function
const addANote = note => ({
    type: ADD_NOTE,
    note,
})
//------------------------------------------------------------------
//Adds edits a note
const editNotes = note => ({
    type: EDIT_NOTE,
    note
})
//edit note function
//------------------------------------------------------------------
// Deletes a note
const deleteNote = note => ({
    type: DELETE_NOTE,
    note
})
// delete note function
//------------------------------------------------------------------

const intitalState = {list: []}

const noteReducer = (state = intitalState, action) => {
    // console.log("INITIAL ACTION", action)
    switch (action.type) {
        case GET_ALL_NOTES:
            const allNotes = {};
            action.list.forEach(note => {
                allNotes[note.id] = note;
            });
            // console.log("ACTION", action)
            return {
                ...allNotes,
                ...state.list,
                list: action.list
            }
        default:
            return state;
    }
}
export default noteReducer;
