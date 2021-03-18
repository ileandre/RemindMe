import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"

import axios from 'axios'
import { eventsBaseURL, config } from "../services"
import EventsForm from "./EventsForm"

// console.log("You're in the events component")
function Events(props) {
  const params = useParams()
  const { year, month, day } = params
  // const history = useHistory()
  
  
console.log('back in events')
  return (
    <div className="eventPage">
      <Link to="/calendar">
          <button>Calendar</button>
      </Link>
      <h1>events</h1>
      
      {props.eventsInfo.map((event) => {
        if (event.fields.year === parseInt(year) && event.fields.month === month.toString() && event.fields.day === parseInt(day)) {
          return <Events
            event={event}
            eventsInfo={props.eventsInfo}
            setToggleFetch={props.setToggleFetch} />
        }
        { console.log(event.fields.year, event.fields.month, event.fields.day) }
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
