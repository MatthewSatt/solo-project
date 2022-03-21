import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { notebookNotes } from "../../store/notebook";
import { useState } from 'react';
import "./InsideNotebook.css"

function InsideNotebook() {
    const notebookId = useParams()
    const notebook = useSelector(state => state?.notebookReducer?.find(notebook => notebook?.id === +notebookId?.id))
    const dispatch = useDispatch()
    const [notes, setNotes] = useState('')
    const [noteb, setNoteBook] = useState(notebook)

    useEffect(async () => {
        if(notebook === undefined) return
       const notes = await dispatch(notebookNotes(notebook?.id))
       setNotes(notes)
       setNoteBook(notebook)
    }, [noteb, notes, dispatch, setNotes])


  return (
      <div className='notebooknotes'>
          <ul>
          {notes.length > 0 && notes.map(note => (
              <div key={note.id}>
                  <li>{note.title}: {note.content}</li>

              </div>
          ))}
          </ul>
      </div>
  )
}

export default InsideNotebook
