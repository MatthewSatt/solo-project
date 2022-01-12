import { csrfFetch } from './csrf'
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES'
const GET_NOTE = 'notes/GET_NOTE'
const ADD_NOTE = 'notes/ADD_NOTE'
const EDIT_NOTE = 'notes/EDIT_NOTE'
const DELETE_NOTE = 'notes/DELETE_NOTE'

const getNotes = list => ({
    type: GET_ALL_NOTES,
    list,
})


const getANote = list => ({
    type: GET_NOTE,
    list,
})


const addANote = list => ({
    type: ADD_NOTE,
    list,
})



const editNotes = note => ({
    type: EDIT_NOTE,
    note
})


const deleteANote = list => ({
    type: DELETE_NOTE,
    list,
})



export const getAllNotes = () => async (dispatch) => {
    const response = await csrfFetch(`/api/notes`);

    if (response.ok) {
        const notes = await response.json();
        dispatch(getNotes(notes));
    }
};



export const getOneNote = (id) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${id}`)

    if (response.ok) {
        const note = await response.json()
        dispatch(getANote(note))
    }
}






export const addNote = (noList) => async dispatch => {
    const response = await csrfFetch(`/api/notes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(noList)
    })
    if(!response.ok) {
        let error = await response.json()
        return error
    }
    const list = await response.json()
    await dispatch(addANote(list));
    return list
}





// export const editNote = (id) => async dispatch => {
//     const response = await csrfFetch(`api/notes/${id}`, {
//         method: 'PUT',
//         headers: {"Content-Type": 'application/json'},
//         body: JSON.stringify()
//     })
// }







export const deleteNote = (id) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${id}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        const note = await response.json()
        dispatch(deleteANote(note));
    }
}
//------------------------------------------------------------------

const intitalState = { list: [] }

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
        case GET_NOTE: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            };
            return newState;
        }
        case ADD_NOTE: {
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                    ...action.list
                }
            }
        }
        // case DELETE_NOTE:
        //     return {

        //     }


        default:
            return state;
    }
}
export default noteReducer;
