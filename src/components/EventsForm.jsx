import axios from 'axios'
import {eventsBaseURL, config} from "../services"
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

function EventsForm(props) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  // const params = useParams()


  // useEffect(() => {
  //   if (params.id) {
  //     const editEvent = props.eventsInfo.find((event) => event.id === params.id)
  //     console.log(params.id)
  //     if (editEvent) {
  //       setTitle(editEvent.fields.title)
  //       setTime(editEvent.fields.time)
  //       setDescription(editEvent.fields.description)
  //     }
  //   }
  // },[props.eventInfo, params.id])

  const handleSubmit = async(e) => {
    e.preventDefault()
    const newEvent = {
      title,
      time,
      description,
      month: props.month,
      day: parseInt(props.day),
      year: parseInt(props.year)
    }
    await axios.post(eventsBaseURL, {fields: newEvent}, config)
    props.setEventToggleFetch((curr) => !curr)
    setTitle("")
    setTime("")
    setDescription("")
  }

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