import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, numberOfDaysArr, setNumberOfDaysArr, year } = props

  // const [calendarInfo, setCalendarInfo] = useState()
  // const numberOfDays = calendarInfo[0].fields.numberOfDays

  
  const numOfDaysArr = []
  for (let day = 1; day <= parseInt(numberOfDays); day++) {
    numOfDaysArr.push(<>
        <Days day={day} month={month} year={year}/>
    </>)
  }
  setNumberOfDaysArr(numOfDaysArr)
  
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
          {numberOfDaysArr}
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
            console.log(note)
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