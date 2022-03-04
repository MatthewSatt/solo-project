import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNotebook, getNotebooks } from "../../store/notebook";
import { useEffect, useState } from "react";
import SingleNotebook from "./SingleNotebook";
import {Modal} from '../../context/Modal'


function Notebooks() {
const dispatch = useDispatch()
const user = useSelector((state) => state.session.user)
const notebooks = useSelector((state) => state.notebookReducer);
const [showModal, setShowModal] = useState(false)

const generateNotebook = () => {

}


const handleAdd = async () => {
   const notebook = {
      'title': `${user.username}'s Notebook ${Math.random(1, 1000).toFixed(3) * 1000}`,
      'userId': user.id
   }
   await dispatch(addNotebook(notebook))
}


useEffect(() => {
   dispatch(getNotebooks())
},[dispatch])

return (
    <>
      <h1>Welcome to Evernote {user.username}!</h1>
      <h2>Organize all of your notes one place</h2>
      <h3>Select from your notebooks below to get started</h3>
      <button onClick={handleAdd}>Generate Random Notebook</button>
          {notebooks && notebooks.map((notebook) => (
          <div id={notebook.id} key={notebook.id}>
             <SingleNotebook notebook={notebook} />
          </div>
          )).reverse()}
    </>
  );
}

export default Notebooks;
