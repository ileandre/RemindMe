import { eventsBaseURL, notesBaseURL, config } from "../services"
import axios from "axios"
import { useEffect, useState } from "react"
import Days from "../components/Days"

function Calendar() {
  const [calendarInfo, setCalendarInfo] = useState()
  const numberOfDays = calendarInfo[0].fields.numberOfDays
  const dateNumbers = []

  useEffect(() => {
    const callAPI = async() => {
      const resp = await axios.get(notesBaseURL, config)
      setCalendarInfo(resp.data.records)
    }
    callAPI()
  }, [])

  for (let num = 1; num <= numberOfDays; num++) (
    dateNumbers.push(num)
  )

  return(
    <div className="calendarPage">
      <nav>
        <button>Home</button>
        <h2>RemindMe</h2>
      </nav>
      <h1>Month Name and Year</h1>
      <div className="calendarBoard">
        <div className="calendar">
          {dateNumbers.map((num) => {
            return (
              <Days num={num} />
            )
          })}
        </div>
        <div className="notesList">
          notes
          input
        </div>
      </div>
    </div>
  )
}

export default Calendar