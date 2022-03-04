import React from "react";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { deleteNotebook, getNotebooks } from "../../store/notebook";
import "./SingleNotebook.css";
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
      <h2>{notebook.title}</h2>
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
