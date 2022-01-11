import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllNotes } from "../../store/note";

// console.log(getAllNotes);

const AllNotes = () => {
    const notes = useSelector(state => state.note.list)
    const dispatch = useDispatch();
    console.log("this is notes", notes)

    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);

    return (
        <div>
            <h2>This is single note</h2>
            <ul>
                {notes?.map(note => (
                    <li key={note.content}>
                        {note.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllNotes;
