import axios from "axios";
import { notesBaseURL, config } from "../services";
import { useState } from "react";

function NotesForm(props) {
  const [note, setNote] = useState("");
  const { month, numberOfDays, startDay, year } = props;

  const handleSubmit = async (e) => {                                   
    e.preventDefault();
    const newNote = {
      month,
      note,
      numberOfDays,
      startDay,
      year,
    };
    await axios.post(notesBaseURL, { fields: newNote }, config);
    props.setToggleFetch((curr) => !curr);
    setNote("");
  };

  return (
    <div className="notesForm">
      <form onSubmit={handleSubmit}>
        <label>New Note: </label>
        <textarea
          type="textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="notesFormButton">
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  );
}

export default NotesForm;
