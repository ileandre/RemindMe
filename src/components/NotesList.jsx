import axios from 'axios'
import {notesBaseURL, config} from "../services"
import { useState, useEffect } from 'react'

function NotesList(props) {
  const [note, setNote] = useState("")
  const [notesList, setNotesList] = useState("")
  const {title, time, description} = props.note.fields
  const erase = async () => {
    const recipeURL = `${notesBaseURL}/${props.recipe.id}`
    await axios.delete(notesBaseURL, config)
    props.setToggleFetch((curr) => !curr)
    // history.push("/")
  }

  return (
    <div>
      <h1><span>Title: </span>title</h1>
      <h4><span>Time: </span>time</h4>
      <p><span>Descriptiion: </span>description</p>
      <button type="submit" onClick={erase}>delete</button>
    </div>
  )
}

export default NotesList