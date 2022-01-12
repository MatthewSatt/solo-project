import { deleteNote } from "../../store/note";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneNote } from "../../store/note";

const OneNote = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const note = useSelector(state => state.note[noteId])
    console.log("NOTE", note)
    useEffect(() => {
        dispatch(getOneNote(noteId));
    }, [dispatch, noteId]);



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(deleteNote(noteId))
        history.push('/notes')
    }

    return (
        <div>
            <h2>{note?.title} <br></br>
            {note?.id}<br></br>
            {note?.content}</h2>
            <button onClick={handleSubmit}>Delete note</button>
        </div>

    )
}

export default OneNote;
