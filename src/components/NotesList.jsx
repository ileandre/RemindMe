import { useState, useEffect } from 'react'

function NotesList() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div>
    <h1>Notes List</h1>
    <form>
      <label>Title: 
        <input type="text" value={title} />
      </label>
      <label>Time: 
        <input type="time" value={time} />
      </label>
      <label>Description: 
        <textarea type="textarea" value={description} />
      </label>
    </form>
    </div>
  )
}

export default NotesList