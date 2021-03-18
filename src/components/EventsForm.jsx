import axios from 'axios'
import {eventsBaseURL, config} from "../services"
import { useState } from 'react'

function EventsForm(props) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newEvent = {
      title,
      time,
      description,
      month: props.month,
      day: props.day,
      year: props.year
    }
    await axios.post(eventsBaseURL, {fields: newEvent}, config)
    props.setToggleFetch((curr) => !curr)
  }

  console.log("You're in the EventsForm component")


  return (
    <div className="eventForm">
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