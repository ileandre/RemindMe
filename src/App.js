import Calendar from "./components/Calendar"
import Days from "./components/Days"
// import DayAgenda from "./components/DayAgenda"
import Events from "./components/Events"
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
  const [numberOfDays, setNumberOfDays] = useState("Number of days")
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
    console.log(calendarInfo)
    console.log(eventsInfo)
  }, [toggleFetch])

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
          eventsInfo={eventsInfo}
          setToggleFetch={setToggleFetch}
          month={month}
          numberOfDays={numberOfDays}
          startDay={startDay}
          year={year}/>
      </Route>

      {/* {numberOfDaysArr && numberOfDaysArr.map((num) => {
        <Route path={`/events/:year/:month/${num}`}>
          <Events eventsInfo={eventsInfo} />
        </Route>
        // console.log(year, month, num)
      })} */}

      {numberOfDaysArr && numberOfDaysArr.map((date) => {
        <Route path={`/events/:year/:month/${date}`}>
          return <Events eventsInfo={eventsInfo} />
        </Route>
        console.log(year, month, date)
      })}

      <Route path="/notes/:year/:month/:id">
        <NotesList calendarInfo={calendarInfo} />
      </Route>

      <Route path="/events/2021/January/21/the">
        <NotesList calendarInfo={calendarInfo} />
      </Route>

    </div>
  );
}

export default App;
