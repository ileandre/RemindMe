import {useParams, useHistory} from "react-router-dom"
import { Link } from "react-router-dom"

import axios from 'axios'
import { eventsBaseURL, config } from "../services"
import EventsForm from "../components/EventsForm"

// console.log("You're in the events component")
function Events(props) {
  const params = useParams()
  const { year, month, day } = params
  const history = useHistory()
  
  const erase = async() => {
    const eraseEventURL = `${eventsBaseURL}/${props.note.id}`
    console.log(props.note.id)
    console.log(eraseEventURL)
    await axios.delete(eraseEventURL, config)
    props.setToggleFetch((curr) => !curr)
    history.push("/calendar")
  }
console.log('back in events')
  return (
    <div className="eventPage">
      <Link to="/calendar">
          <button>Calendar</button>
      </Link>
      <h1>events</h1>
      
      {props.eventsInfo.map((item,index) => {
        if (item.fields.year === parseInt(year) && item.fields.month === month.toString() && item.fields.day === parseInt(day)) {
          return (<div id={index} className="eventsList">
            <h3>Title: {item.fields.title}</h3>
            <p>Time: {item.fields.time}</p>
            <p>Description: {item.fields.description}</p>
            <button onClick={erase}>Delete</button>
          </div>)
        }
        { console.log(item.fields.year, item.fields.month, item.fields.day) }
        {console.log(parseInt(year), month, parseInt(day))}
      })}
      
      <div className="eventsForm">
        <h1>Form</h1>
        <EventsForm year={year} month={month} day={day} setToggleFetch={props.setToggleFetch}/>
      </div>
    </div>

  )
}

export default Events
