import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNotes } from "../../store/note";
import './AllNotes.css'





const AllNotes = () => {

  const notes = useSelector((state) => Object.values(state.note));
  console.log("notes", notes)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <div className="allnotes">
      <div className="left-panel">
        <h2 id='all-notes-title'>All Notes:</h2>
        <h2>Click note to edit/delete</h2>
      </div>
      <div className="right-panel">
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>
            <Link className="link-to-single-note" to={`/notes/${note?.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default AllNotes;
