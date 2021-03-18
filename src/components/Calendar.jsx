import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"
import {useEffect} from "react"

function Calendar(props) {
  const { month, numberOfDays, year } = props
  const numOfDaysArr = []

  // const [calendarInfo, setCalendarInfo] = useState()
  // const numberOfDays = calendarInfo[0].fields.numberOfDays

  console.log(numberOfDays)
  // console.log(month)
  // console.log(year)

    for (let day = 1; day <= numberOfDays; day++) {
      numOfDaysArr.push(<>
        <Days day={day} month={month} year={year} />
      </>)
    }
  
  console.log(numOfDaysArr)
  // props.setNumberOfDaysArr(numOfDaysArr)
  // console.log(props.numberOfDaysArr)

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
          {numOfDaysArr}
        </div>
        <div className="notesList">
          {props.calendarInfo.map((note) => {
            if (note.fields.note) {
              return <NotesList
                key={note.id}
                note={note}
                calendarInfo={props.calendarInfo}
                setToggleFetch={props.setToggleFetch}
              />
            }
            // console.log(note)
          })}
          <NotesForm 
            month={month}
            year={year}
            setToggleFetch={props.setToggleFetch}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar