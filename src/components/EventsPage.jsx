import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import Events from "./Events"
import EventsForm from "./EventsForm"

function EventsPage(props) {
  const params = useParams()
  const { year, month, day } = params

  return (
    <div className="eventPage">
      <div className="eventNav">
        <Link to="/calendar">
          <button>Calendar</button>
        </Link>
      </div>
      <div className="eventList">
        <p className="dayDateTitle">{month} {day}, {year}</p>
        <h2>Events</h2>
        {props.eventsInfo.map((event, index) => {
          if (event.fields.year === parseInt(year) && event.fields.month === month.toString()  && event.fields.day === parseInt(day)) {
            return (
              <Events
                key={index}
                event={event}
                eventsInfo={props.eventsInfo}
                setEventToggleFetch={props.setEventToggleFetch}
                setNumberOfDays={props.setNumberOfDays}
                numberOfDays={props.numberOfDays}
              />
            )
          }
        })}
        
        <div className="eventsForm">
          <h3>Form</h3>
          <EventsForm
            year={year}
            month={month}
            day={day}
            eventsInfo={props.eventsInfo}
            setEventToggleFetch={props.setEventToggleFetch}
            setNumberOfDays={props.setNumberOfDays}
            numberOfDays={props.numberOfDays} />
          </div>
        </div>
    </div>

  )
}

export default EventsPage
