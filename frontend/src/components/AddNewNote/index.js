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

    };

    return (
        <div className="new-note-form-container">
            <h1>Create a new note</h1>
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
                        <button id="create-new-note-button" type="submit">Create Note</button>
                        <button id="cancel-new-note" type="button">Cancel</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default AddOneNote;
