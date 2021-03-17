import axios from 'axios'
import {eventsBaseURL, config} from "../services"
import { useState } from 'react'

function EventsForm() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newEvent = {
      title,
      time,
      description,
    }
    await axios.post(eventsBaseURL, {fields: newEvent}, config)
  }

  return (
    <div>
    <h1>Notes List</h1>
    <form onSubmit={handleSubmit}>
      <label>Title: 
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>Time: 
        <input required type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
      </label>
      <label>Description: 
        <textarea type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <button type="submit">Add Event</button>
    </form>
    </div>
  )
}

export default EventsForm