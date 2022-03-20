import { Modal } from "../../context/Modal";
import { addNotebook } from "../../store/notebook";
import {useState} from 'react'
import Notebooks from ".";

import { useSelector, useDispatch } from "react-redux";

function AddNotebook({showModal, setShowModal}) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const [notebookName, setNotebookName] = useState('')

    const handleAdd = async (e) => {
        e.preventDefault()
        const notebook = {
            title: notebookName,
            userId: user.id
        }
        await dispatch(addNotebook(notebook))
        setShowModal(false)
    }
    return (
        <>
            <Modal onClose={() => setShowModal(false)}>
              <form onSubmit={handleAdd}>
                  <div>
                  <h1>New Notebook</h1>
                  <input value={notebookName}
                  placeholder={'New Notebook Name'}
                  onChange={e => setNotebookName(e.target.value)}></input>
                <button type='submit'>Create</button>
                  </div>
              </form>
            </Modal>
        </>
      );
    }
export default AddNotebook
