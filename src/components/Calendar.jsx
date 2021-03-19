import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, year} = props
  const numOfDaysArr = []


  console.log(numberOfDays)

  // useEffect(() => {
  //   if()
  // },[])
  //numberOfDays
    for (let day = 1; day <= 30; day++) {
        numOfDaysArr.push(<>
          <Days day={day} month={month} year={year} />
        </>)
      }

  console.log(numOfDaysArr)

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
            if (note.fields.note && note.fields.year === parseInt(year) && note.fields.month === month.toString()) {
              return (<NotesList
                note={note}
                calendarInfo={props.calendarInfo}
                setToggleFetch={props.setToggleFetch}
              />)
            }
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