import axios from 'axios'
import {notesBaseURL, config} from "../services"

function NotesList(props) {

  const erase = async() => {
    const eraseNoteURL = `${notesBaseURL}/${props.note.id}`
    await axios.delete(eraseNoteURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div className="notes">
      <label>{props.note.fields.note}</label>
      <button className="noteDeleteButton" onClick={erase}>Delete</button>
    </div>
  )
}

export default NotesList