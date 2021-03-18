import axios from 'axios'
// import { useHistory } from "react-router-dom"
import {eventsBaseURL, config} from "../services"

function Events(props) {
  
  const erase = async() => {
    const eraseEventURL = `${eventsBaseURL}/${props.event.id}`
    console.log(props.event.id)
    console.log(eraseEventURL)
    await axios.delete(eraseEventURL, config)
    props.setToggleFetch((curr) => !curr)
    // history.push("/calendar")
  }

  return (
    <div id={index} className="eventsList">
      <h3>Title: {props.event.fields.title}</h3>
      <p>Time: {props.event.fields.time}</p>
      <p>Description: {props.event.fields.description}</p>
      <button onClick={erase}>Delete</button>
    </div>
  )
}

export default Events