import Calendar from "./components/Calendar"
// import DayAgenda from "./components/DayAgenda"
import EventsPage from "./components/EventsPage"
// import EventsForm from "./components/EventsForm"
import Homepage from "./components/Homepage"
import { useEffect, useState } from "react"
import {notesBaseURL, eventsBaseURL, config} from "./services"
import {Route } from "react-router-dom"
import './App.css';
import axios from "axios"

function App() {
  const [calendarInfo, setCalendarInfo] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  const [eventToggleFetch, setEventToggleFetch] = useState(true)
  const [eventsInfo, setEventsInfo] = useState([])
  const [month, setMonth] = useState("Month")
  const [numberOfDays, setNumberOfDays] = useState(0)
  const [startDay, setStartDay] = useState("Start day")
  const [year, setYear] = useState(0)
  
  useEffect(() => {
    const callAPI = async () => {
      const notesResp = await axios.get(notesBaseURL, config)
      setCalendarInfo(notesResp.data.records)
    }
    callAPI()
    // console.log(calendarInfo)
    // console.log(eventsInfo)
    // setNumOfDaysArr([])
  }, [toggleFetch])

  useEffect(() => {
    const callAPI = async () => {
      const eventsResp = await axios.get(eventsBaseURL, config)
      setEventsInfo(eventsResp.data.records)
    }
    callAPI()
    // console.log(calendarInfo)
    // console.log(eventsInfo)
    // setNumOfDaysArr([])
  }, [eventToggleFetch])


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
          startDay={startDay}
          numberOfDays={numberOfDays}
          month={month}
          startDay={startDay}
          year={year}/>
      </Route>

      <Route path="/events/:year/:month/:day/">
        <EventsPage
          eventsInfo={eventsInfo}
          setEventToggleFetch={setEventToggleFetch}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
        />
      </Route>

      {/* <Route path="/events/:year/:month/:day/:id">
        <EventsPage
          eventsInfo={eventsInfo}
          setEventToggleFetch={setEventToggleFetch}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
        />
      </Route> */}

    </div>
  );
}

export default App;
