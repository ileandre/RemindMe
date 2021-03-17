import axios from 'axios'
import {notesBaseURL, config} from "../services"
import { useState } from 'react'

function NotesList(props) {
  const [note, setNote] = useState("")
const{month, year} = props

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newNote = {
      month,
      note,
      year,
    }
    await axios.post(notesBaseURL, {fields: newNote}, config)
  }

  return (
    <div>
    <h1>Notes List</h1>
    <form onSubmit={handleSubmit}>
      <label>New Note: 
        <textarea type="textarea" value={note} onChange={(e) => setNote(e.target.value)}/>
        </label>
        <button type="submit">Add Event</button>
    </form>
    </div>
  )
}

export default NotesList