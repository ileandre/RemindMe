import axios from 'axios'
import { useHistory } from "react-router-dom"
import {notesBaseURL, config} from "../services"

function NotesList(props) {
  const history = useHistory()

  const erase = async() => {
    const eraseNoteURL = `${notesBaseURL}/${props.note.id}`
    console.log(props.note.id)
    console.log(eraseNoteURL)
    await axios.delete(eraseNoteURL, config)
    props.setNotesToggleFetch((curr) => !curr)
    // history.push("/")
  }

  return (
    <div>
      <p><span>* </span>{props.note.fields.note}</p>
      <button onClick={erase}>Delete</button>
    </div>
  )
}

export default NotesList