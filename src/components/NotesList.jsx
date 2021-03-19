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
    <div className="notes">
      <label> * {props.note.fields.note}</label>
      <button onClick={erase}>Delete</button>
    </div>
  )
}

export default NotesList