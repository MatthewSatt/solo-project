import { csrfFetch } from './csrf'


const GET_ALL_NOTES = 'notes/getNotes'
const ADD_NOTE = 'notes/addNote'
const EDIT_NOTE = 'notes/editNote'
const DELETE_NOTE = 'notes/deleteNote'


//Gets all notes
const getNotes = notes => ({
    type: GET_ALL_NOTES,
    notes,
})

// get notes function

//------------------------------------------------------------------
//Adds a note
const addNote = note => ({
    type: ADD_NOTE,
    note,
})

// add note function

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

const noteReducer = () => {
    return null
}




export default noteReducer;
