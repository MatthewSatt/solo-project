import { deleteNote } from "../../store/note";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneNote } from "../../store/note";
import './OneNote.css'


const OneNote = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const note = useSelector((state) => state.note[noteId]);



  useEffect(() => {
    dispatch(getOneNote(noteId));
  }, [dispatch, noteId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteNote(noteId));

    if(dispatch) {
      history.push("/notes");
    };
  }

  const backToList = (e) => {
    e.preventDefault()
  }


  const handleEdit = (e) => {
    e.preventDefault();
    history.push(`/${note.id}/edit`)
  }

  return (
    <div className="onenoteitems">
      <h2>
        <p>Title:</p> {note?.title} <br></br>
        <br></br>
        <p>Content:</p> {note?.content}
      </h2>
      <div className="edit-delete-buttons">
        <button id='delete-note' onClick={handleSubmit}>Delete note</button>
        <button id='edit-note' onClick={handleEdit}>Edit note</button>
      </div>
    </div>
  );
};

export default OneNote;
