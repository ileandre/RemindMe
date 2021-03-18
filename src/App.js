import Calendar from "./components/Calendar"
import Days from "./components/Days"
// import DayAgenda from "./components/DayAgenda"
import EventsPage from "./components/EventsPage"
// import EventsForm from "./components/EventsForm"
import NotesList from "./components/NotesList"
import Homepage from "./components/Homepage"
import { useEffect, useState } from "react"
import {notesBaseURL, eventsBaseURL, config} from "./services"
import {Route } from "react-router-dom"
import './App.css';
import axios from "axios"

function App() {
  const [calendarInfo, setCalendarInfo] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  const [eventsInfo, setEventsInfo] = useState([])
  const [month, setMonth] = useState("Month")
  const [numberOfDays, setNumberOfDays] = useState()
  const [startDay, setStartDay] = useState("Start day")
  const [year, setYear] = useState("Year")
  
  useEffect(() => {
    const callAPI = async () => {
      const notesResp = await axios.get(notesBaseURL, config)
      const eventsResp = await axios.get(eventsBaseURL, config)
      setCalendarInfo(notesResp.data.records)
      setEventsInfo(eventsResp.data.records)
    }
    callAPI()
    // console.log(calendarInfo)
    // console.log(eventsInfo)
  }, [toggleFetch])


  // console.log(numberOfDays)
  // console.log(month)
  // console.log(year)

  return (
    <div className="App">

      <Route exact path="/">
        <Homepage
          calendarInfo={calendarInfo}
          setToggleFetch={setToggleFetch}
          setMonth={setMonth}
          month={month}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
          setStartDay={setStartDay}
          startDay={startDay}
          setYear={setYear}
          year={year}/>
      </Route>

      <Route path="/calendar">
        <Calendar
          calendarInfo={calendarInfo}
          eventsInfo={eventsInfo}
          setToggleFetch={setToggleFetch}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
          month={month}
          startDay={startDay}
          year={year}/>
      </Route>

      <Route path="/events/:year/:month/:day">
        <EventsPage
          eventsInfo={eventsInfo}
          setToggleFetch={setToggleFetch}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
        />
      </Route>

    </div>
  );
}

export default App;
