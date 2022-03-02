import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotebook, getNotebooks } from "../../store/notebook";
import "./SingleNotebook.css";
function SingleNotebook({ notebook, item, setItem}) {
  const dispatch = useDispatch();




  const handleDelete = () => {
    //   dispatch(deleteNotebook(notebook.id))
      console.log('delete', notebook.id)
     dispatch(deleteNotebook(notebook.id))
     setItem(notebook.id)
     return
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
