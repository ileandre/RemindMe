import Calendar from "./components/Calendar"
import Days from "./components/Days"
// import DayAgenda from "./components/DayAgenda"
import Events from "./components/Events"
// import EventsForm from "./components/EventsForm"
import NotesList from "./components/NotesList"
import Homepage from "./components/Homepage"
import { useEffect, useState } from "react"
import {notesBaseURL, config} from "./services"
import {Route } from "react-router-dom"
import './App.css';
import axios from "axios"

function App() {
  const [calendarInfo, setCalendarInfo] = useState([])
  const [notesToggleFetch, setNotesToggleFetch] = useState(true)
  const [month, setMonth] = useState("Month")
  const [numberOfDays, setNumberOfDays] = useState("Number of days")
  const [startDay, setStartDay] = useState("Start day")
  const [year, setYear] = useState("Year")
  
  useEffect(() => {
    const callAPI = async () => {
      const resp = await axios.get(notesBaseURL, config)
      setCalendarInfo(resp.data.records)
    }
    callAPI()
    console.log(calendarInfo)
  }, [notesToggleFetch])

  const numberOfDaysArr = []
  for (let num = 1; num <= parseInt(numberOfDays); num++) {
    numberOfDaysArr.push(num)
  }
  console.log(numberOfDaysArr)

  return (
    <div className="App">

      <Route exact path="/">
        <Homepage
          calendarInfo={calendarInfo}
          setNotesToggleFetch={setNotesToggleFetch}
          setMonth={setMonth}
          setNumberOfDays={setNumberOfDays}
          setStartDay={setStartDay}
          setYear={setYear}
          month={month}
          numberOfDays={numberOfDays}
          startDay={startDay}
          year={year}/>
      </Route>

      <Route exact path="/calendar">
        <Calendar
          calendarInfo={calendarInfo}
          setNotesToggleFetch={setNotesToggleFetch}
          month={month}
          numberOfDays={numberOfDays}
          startDay={startDay}
          year={year}/>
      </Route>

      {/* {calendarInfo && calendarInfo[0].fields.numberOfDays.map((day) => (
        < Route path={`/calendar/${day}`}>
          <Days />
        </Route>
      ))} */}

      {numberOfDaysArr && numberOfDaysArr.map((num) => {
        <Route path={`/events/${year}/${month}/${num}`}>
          <Events calendarInfo={calendarInfo} />
        </Route>
        // console.log(year, month, num)
      })}

    </div>
  );
}

export default App;
