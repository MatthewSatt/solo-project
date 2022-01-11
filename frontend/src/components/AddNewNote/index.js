import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {addNote} from '../../store/note';

function AddOneNote() {
    const history = useHistory()
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)



    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        //!!START SILENT
        const payload = {
            title,
            content
        }

        let newNote;
        try {
            newNote = await dispatch(addNote(payload));
        } catch (error) {
            throw new Error("The Package was not delivered")
        }


        // if (createdSpot) {
        //     // history.push(`/notes/${createdSpot.id.id}`);
        // }
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

                    <button className="host-form" type="submit">Create new Spot</button>
                    <button className="host-form" type="button" onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>

        </div>
    )
}

export default AddOneNote;
