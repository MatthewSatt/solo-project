import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotebook, getNotebooks } from "../../store/notebook";
import { useEffect, useState } from "react";
import SingleNotebook from "./SingleNotebook";


function Notebooks() {
const dispatch = useDispatch()
const user = useSelector((state) => state.session.user)
const notebooks = useSelector((state) => state.notebookReducer);
const [item, setItem] = useState('')

console.log(notebooks)


useEffect(() => {
   dispatch(getNotebooks())
},[dispatch, setItem, item])

return (
    <>
      <h1>Welcome to Evernote {user.username}!</h1>
      <h2>Organize all of your notes one place</h2>
      <h3>Select from your notebooks below to get started</h3>
          {notebooks && notebooks.map((notebook) => (
          <div id={notebook.id} key={notebook.id}>
             <SingleNotebook notebook={notebook} item={item} setItem={setItem}/>
          </div>
          ))}
    </>
  );
}

export default Notebooks;
