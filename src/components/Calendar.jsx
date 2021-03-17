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
  
  const numberOfDaysArr = []
  for (let num = 1; num <= parseInt(numberOfDays); num++) {
    numberOfDaysArr.push(<>
        <Days num={num} month={month} year={year}/>
    </>)
    console.log(year, month, num)
  }
  
  // for (let num = 1; num <= parseInt(numberOfDays); num++) {
  //   numberOfDaysArr.push(num)
  // }
  
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
          {/* {numberOfDaysArr.map((num) => {
            <Days
              num={num}
              month={month}
              year={year}/>
          })} */}
          {numberOfDaysArr}
        </div>
        <div className="notesList">
          <NotesList
            month={month}
            year={year}/>
        </div>
      </div>
    </div>
  )
}

export default Calendar