import axios from 'axios'
import {notesBaseURL, config} from "../services"

function NotesList(props) {

  const erase = async() => {
    const eraseNoteURL = `${notesBaseURL}/${props.note.id}`
    console.log(props.note.id)
    console.log(eraseNoteURL)
    await axios.delete(eraseNoteURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div>
      <p><span>* </span>{props.note.fields.note}</p>
      <button onClick={erase}>Delete</button>
    </div>
  )
}

export default NotesList