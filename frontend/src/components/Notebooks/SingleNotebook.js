import React from "react";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { deleteNotebook, getNotebooks } from "../../store/notebook";
import { Link } from "react-router-dom";
import "./SingleNotebook.css";
import InsideNotebook from "./InsideNotebook";
function SingleNotebook({ notebook }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const notebooks = useSelector((state) => state.notebookReducer)



  const handleDelete = async () => {
      await dispatch(deleteNotebook(notebook.id))
      history.push('/notebooks')
  };

  const editNotebook = () => {
    console.log("edit", notebook.id);
  };

  return (
    <div className="singlenotebook">
      <Link to={`/notebooks/${notebook.id}`}>
        <h2>{notebook.title}</h2>
        </Link>
      <div key={notebook.id}>
        <p>{notebook.id}</p>
        <p>{notebook.userId}</p>
        <p>{notebook.createdAt}</p>
        <p>{notebook.updatedAt}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={editNotebook}>Edit</button>
    </div>
  );
}

export default SingleNotebook;
