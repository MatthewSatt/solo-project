import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';

import { getAllNotes } from "../../store/note";

// console.log(getAllNotes);

const AllNotes = () => {
    const notes = useSelector(state => state.note.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);

    return (
        <div>
            <h2>ALL THE NOTES</h2>
            <ul>
                {notes?.map(note => (
                    <li key={note.id}>
                       <Link to={`/notes/${note.id}`}>{note.content}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllNotes;
