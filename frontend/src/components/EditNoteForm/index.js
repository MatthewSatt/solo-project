import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getAllNotes} from '../../store/note';
import { getOneNote } from "../../store/note";
import { editNote } from "../../store/note";


function EditNoteForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)

    const {id} = useParams()
    const userId = session.user.id
    const notebookId = session.user.id


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")





    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            title,
            content,
            userId,
            notebookId,
        }

        let newNote = await dispatch(editNote(payload))
        history.push('/notes')

    };


    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/notes')

    };

    return (
        <div className="new-note-form-container">
            <h1>Edit Note</h1>
            <div className="new-note-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            placeholder="New title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <br></br>
                    </label>
                    <label>
                        <input
                            type='text'
                            placeholder="New content"
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

export default EditNoteForm
