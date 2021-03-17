import axios from 'axios'
import {notesBaseURL, config} from "../services"
import { useState, useEffect } from 'react'

function NotesList(props) {
  const [note, setNote] = useState("")
  const [notesList, setNotesList] = useState("")
  const erase = async () => {
    const recipeURL = `${notesBaseURL}/${props.recipe.id}`
    await axios.delete(notesBaseURL, config)
    props.setToggleFetch((curr) => !curr)
    // history.push("/")
  }

  return (
    <div>
      <p><span>* </span>{props.note.fields.note}</p>
      <button type="submit" onClick={erase}>delete</button>
    </div>
  )
}

export default NotesList