import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, year } = props

  // const [calendarInfo, setCalendarInfo] = useState()
  // const numberOfDays = calendarInfo[0].fields.numberOfDays

  
  const numberOfDaysArr = []
  for (let date = 1; date <= parseInt(numberOfDays); date++) {
    numberOfDaysArr.push(<>
        <Days date={date} month={month} year={year}/>
    </>)
  }

  // const numberOfDaysArr = []
  // for (let date = 1; date <= parseInt(numberOfDays); date++) {
  //   numberOfDaysArr.push(date)
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
          {/* {numberOfDaysArr && numberOfDaysArr.map((date) => {
            return (<Days
              date={date}
              month={month}
              year={year}/>)
          })} */}
          {numberOfDaysArr}
        </div>
        <div className="notesList">
          {props.calendarInfo.map((note) => {
            if (note.fields.note) {
              return <NotesList key={note.id} note={note} calendarInfo={props.calendarInfo} setNotesToggleFetch={props.setNotesToggleFetch} />
            }
            console.log(note)
          })}
          <NotesForm 
            month={month}
            year={year}
            setNotesToggleFetch={props.setNotesToggleFetch}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar