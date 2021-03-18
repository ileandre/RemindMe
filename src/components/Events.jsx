import axios from 'axios'
// import { useHistory } from "react-router-dom"
import { eventsBaseURL, config } from "../services"
// import { Link } from "react-router-dom"
import {useState} from "react"

function Events(props) {
  const task = props.event.fields

  const erase = async() => {
    const eraseEventURL = `${eventsBaseURL}/${props.event.id}`
    console.log(props.event.id)
    console.log(eraseEventURL)
    await axios.delete(eraseEventURL, config)
    props.setEventToggleFetch((curr) => !curr)
    // history.push("/calendar")
  }
  console.log(props.numberOfDays)
  console.log(props.numberOfDaysArr)

  return (
    <div className="eventsList">
      <h3>Title: {task.title}</h3>
      <p>Time: {task.time}</p>
      <p>Description: {task.description}</p>
      {/* <Link to={`/events/${task.year}/${task.month}/${task.day}/${props.event.id}`}>
        <button>Edit</button>
      </Link> */}
      <button onClick={erase}>Delete</button>
    </div>
  )
}

export default Events