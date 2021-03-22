import axios from "axios";
import { notesBaseURL, config } from "../services";

function NotesList(props) {                                     //accesses the note stable in the api to delete it's information
  const erase = async () => {
    const eraseNoteURL = `${notesBaseURL}/${props.note.id}`;
    await axios.delete(eraseNoteURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="notes">
      <label>{props.note.fields.note}</label>
      <button className="noteDeleteButton" onClick={erase}>       {/* references the erase function to delete the note you're on */}
        Delete
      </button>
    </div>
  );
}

export default NotesList;
