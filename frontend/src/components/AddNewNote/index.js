import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {addNote, getAllNotes} from '../../store/note';
import './AddNewNote.css'

function AddOneNote() {
    const history = useHistory()
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)


    const userId = session.user.id
    const notebookId = session.user.id


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])

   useEffect(() => {
        const errors = []
        if(title.length > 45) errors.push("The title must not be longer than 45 characters!")
        if(title.length < 3) errors.push("Title must not be shorter than 3 characters!")
        if(content.length < 5) errors.push('Content must be at least 5 characters long')
        setErrors(errors)
    }, [title, content])



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            userId,
            notebookId,
        }

        let newNote = await dispatch(addNote(payload))
        history.push('/notes')

    };


    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('./notes')

    };

    return (
        <div className="new-note-form-container">
            <h1>Create a new note</h1>
            <ul className="errors">
                {errors.length > 0 && (
                    errors.map(error => {
                        return <li key={error}>{error}</li>
                    })
                )}
            </ul>
            <div className="new-note-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            placeholder="Note Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <br></br>
                    </label>
                    <label>
                        <input
                            type='text'
                            placeholder="Content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            />
                    </label>
                    <div className="new-note-buttons">
                        <button id="create-new-note-button" type="submit" disabled={errors.length > 0 ? true : false}>Create Note</button>
                        <button onClick={(handleCancelClick)} id="cancel-new-note" type="button">Cancel</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default AddOneNote;
