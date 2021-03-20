import axios from 'axios'
// import { useHistory } from "react-router-dom"
import { eventsBaseURL, config } from "../services"
// import { Link } from "react-router-dom"

function Events(props) {
  const task = props.event.fields

  const erase = async() => {
    const eraseEventURL = `${eventsBaseURL}/${props.event.id}`
    await axios.delete(eraseEventURL, config)
    props.setEventToggleFetch((curr) => !curr)
    // history.push("/calendar")
  }

  return (
    <div className="events">
      <div className="eventInfo" >
        <p><span>Title:</span> {task.title}</p>
        <p><span>Time:</span> {task.time}</p>
        <p><span>Description:</span> {task.description}</p>
        {/* <Link to={`/events/${task.year}/${task.month}/${task.day}/${props.event.id}`}>
          <button>Edit</button>
        </Link> */}
      </div>
      <div className="eventDeleteButton">
        <button onClick={erase}>Delete</button>
      </div>
    </div>
  )
}

export default Events