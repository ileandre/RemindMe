import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"
import {useHistory} from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, year, startDay} = props
  const numOfDaysArr = []
  const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const history = useHistory()
  // setToggleFetch((curr) => !curr)
  // console.log(numberOfDays)



  // useEffect(() => {
  //   if()
  // },[])
  //numberOfDays
  let d = 0
  if (startDay === "Monday") {
    d = 1
  } else if (startDay === "Tuesday") {
    d = 2
  } else if (startDay === "Wednesday") {
    d = 3
  } else if (startDay === "Thursday") {
    d = 4
  } else if (startDay === "Friday") {
    d = 5
  } else if (startDay === "Saturday") {
    d = 6
  }

    for (let day = 1 - d; day <= 30; day++) {
        numOfDaysArr.push(<>
          <Days day={day} month={month} year={year} />
        </>)
      }

  console.log(numOfDaysArr)

  // if (numberOfDays === 0) {
  //   history.push("/")
  // }

  return(
    <div className="calendarPage">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <h2>RemindMe</h2>
      </nav>
      <h1>{month} </h1>
      <p>{year}</p>
      <div className="calendarBoard">
        <div className="calendar">
          {daysArr.map((day) => {
            return <div className="dayNames">{day.toString()}</div>
            {console.log(day)}
          })}
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
          <h1>Notes </h1>
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