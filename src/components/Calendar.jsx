import Days from "../components/Days"
import NotesList from "../components/NotesList"
import NotesForm from "../components/NotesForm"
import { Link } from "react-router-dom"
import {useHistory} from "react-router-dom"

function Calendar(props) {
  const { month, numberOfDays, year, setToggleFetch} = props
  const numOfDaysArr = []
const history = useHistory()
  // setToggleFetch((curr) => !curr)
  // console.log(numberOfDays)



  // useEffect(() => {
  //   if()
  // },[])
  //numberOfDays
    for (let day = 1; day <= numberOfDays; day++) {
        numOfDaysArr.push(<>
          <Days day={day} month={month} year={year} />
        </>)
      }

  console.log(numOfDaysArr)

  if (numberOfDays === 0) {
    history.push("/")
  }

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