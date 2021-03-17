import { notesBaseURL, config } from "../services"
import axios from "axios"
import { useState } from "react"
import Days from "../components/Days"
import NotesList from "../components/NotesList"
import { Link, Route } from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, startDay, year } = props

  const [calendarInfo, setCalendarInfo] = useState()
  // const numberOfDays = calendarInfo[0].fields.numberOfDays
  const [dateNumbersArr, setDateNumbersArr] = useState([])


  
  //   if (props.calendarInfo && props.calendarInfo.length > 0) {
  //     for (let num = 1; num <= numberOfDays; num++) (
  //       setDateNumbersArr([...dateNumbersArr, num])
  //     )
  //     console.log(dateNumbersArr)
  // }
  // console.log([...Array(parseInt(numberOfDays))])
  
  const days = []
  for (let num = 1; num <= parseInt(numberOfDays); num++) {
    days.push(<>
      <Link to={`/events/${year}/${month}/${num}`}>
        <Days num={num} />
      </Link>
      <Route path="/events/:year/:month:/day">
        {/* <h1>{`year:${year} month: ${month} day: ${num}`}</h1> */}
        <h1>hello</h1>
      </Route>
    </>)
  }
  
  
  return(
    <div className="calendarPage">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <h2>RemindMe</h2>
      </nav>
      <h1>Month Name and Year</h1>
      <div className="calendarBoard">
        <div className="calendar">
          {days}
        </div>
        <div className="notesList">
          <NotesList />
        </div>
      </div>
    </div>
  )
}

export default Calendar