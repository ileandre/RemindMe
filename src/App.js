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
  const [toggleFetch, setToggleFetch] = useState(true)
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
  }, [toggleFetch])



  return (
    <div className="App">

      <Route exact path="/">
        <Homepage
          calendarInfo={calendarInfo}
          setToggleFetch={setToggleFetch}
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
      
      <Route exact path="/events">
        <Events />
      </Route>

      <Route exact path="/:month/:id">
        <NotesList />
      </Route>

    </div>
  );
}

export default App;
