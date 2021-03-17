import axios from 'axios'
import {notesBaseURL, config} from "../services"
import { useState } from 'react'

function NotesForm(props) {
  const [note, setNote] = useState("")
const{month, numberOfDays, startDay, year} = props

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newNote = {
      month,
      note,
      numberOfDays,
      startDay,
      year,
    }
    await axios.post(notesBaseURL, { fields: newNote }, config)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div>
    <h1>Notes form</h1>
    <form onSubmit={handleSubmit}>
      <label>New Note: 
        <textarea type="textarea" value={note} onChange={(e) => setNote(e.target.value)}/>
        </label>
        <button type="submit">Add Note</button>
    </form>
    </div>
  )
}

export default NotesForm