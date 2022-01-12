import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {addNote, getAllNotes} from '../../store/note';

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
        <div id="form-container">
            <h1>Create a new note</h1>
            <div id="host-form" >
                <form onSubmit={handleSubmit}>
                    <label> Note Title:
                        <input
                            type='text'
                            placeholder="Note Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>
                    <label> Content:
                        <input
                            type='text'
                            placeholder="Content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            />
                    </label>

                    <button className="host-form" type="submit">Create Note</button>
                    <button className="host-form" type="button">Cancel</button>
                </form>
            </div>

        </div>
    )
}

export default AddOneNote;
