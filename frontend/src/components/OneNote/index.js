
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneNote } from "../../store/note";

const OneNote = () => {
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const note = useSelector(state => state.note[noteId])
    console.log("NOTE", note)
    // const notteeeesss = [...notes]
    // console.log("this is note", note)
    // const notesArr = Object.values(notes);
    // console.log(notesArr)
    useEffect(() => {
        dispatch(getOneNote(noteId));
    }, [dispatch, noteId]);

    return (
        <div>
            <h2>{note?.title} <br></br>
            {note?.id}<br></br>
            {note?.content}</h2>
        </div>
    )
}

export default OneNote;
