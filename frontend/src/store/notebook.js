import { csrfFetch } from './csrf'

/* ---------------------------------------------------- */
const GET_NOTEBOOKS = '/notebook/GET_NOTEBOOKS'

const getNbs = notebooks => ({
    type: GET_NOTEBOOKS,
    notebooks
})

export const getNotebooks = () => async (dispatch) => {
    const res = await csrfFetch("/api/notebooks")
    if(res.ok) {
        const notebooks = await res.json()
        dispatch(getNbs(notebooks))
    }
};
/* ---------------------------------------------------- */
const GET_ONE_NOTEBOOK = '/notebook/GET_ONE_NOTEBOOK'

const getNb = notebook => ({
    type: GET_ONE_NOTEBOOK,
    payload: notebook
})

export const getNotebook = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/notebooks/${id}`)
    if(res.ok) {
        const notebook = await res.json()
        dispatch(getNb(notebook))
    }
}
/* ---------------------------------------------------- */

const GET_NOTEBOOK_NOTES = '/notebook/GET_NOTEBOOK_NOTES'

const getNotebookN = notebook => ({
    type: GET_NOTEBOOK_NOTES,
    payload: notebook
})

export const notebookNotes = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/notebooks/notes/${id}`)
    if(res.ok) {
        const notebook = await res.json()
        dispatch(getNotebookN(notebook))
        return notebook
    } else {
        return null
    }
}

/* ---------------------------------------------------- */
const ADD_NOTEBOOK = '/notebook/ADD_NOTEBOOK'

const addN = notebook => ({
    type: ADD_NOTEBOOK,
    notebook
})

export const addNotebook = (data) => async (dispatch) => {
    console.log('...............', data)
    const res = await csrfFetch('/api/notebooks/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    if(res.ok) {
        const notebook = await res.json()
        dispatch(addN(notebook))
    }
}
/* ---------------------------------------------------- */
const DELETE_NOTEBOOK = '/notebook/DELETE_NOTEBOOK'

const deleteNotebookThunk = id => ({
    type: DELETE_NOTEBOOK,
    id
})

// export const deleteNotebook = (id) => async (dispatch) => {
//         const res = await csrfFetch(`/api/notebooks/remove/${id}`,
//             method: "DELETE",
export const deleteNotebook = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/notebooks/remove/${id}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        const notebook = await response.json()
        console.log('notebook from server.....', notebook)
        await dispatch(deleteNotebookThunk(notebook.id));
        return notebook
    }
}

/* ---------------------------------------------------- */
export default function notebookReducer(state = [], action) {
    switch (action.type) {
        case GET_NOTEBOOKS:
            return action.notebooks
        case ADD_NOTEBOOK:
            return [...state, action.notebook]
        case DELETE_NOTEBOOK:
            return state.filter((notebook) => notebook.id !== action.id);
        case GET_NOTEBOOK_NOTES:
            return action.payload
        default:
            return state;
    }
}
