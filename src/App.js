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
  const [calendarInfo, setCalendarInfo] = useState()
  const [toggleFetch, setToggleFetch] = useState(true)

  useEffect(() => {
    const callAPI = async() => {
      const resp = await axios.get(notesBaseURL, config)
      setCalendarInfo(resp.data.records)
    }
    callAPI()
    console.log(calendarInfo)
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Homepage calendarInfo={calendarInfo} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/calendar">
      <Calendar />
        {/* <Calendar calendarInfo={calendarInfo} /> */}
      </Route>

      <Route path="/:day">
        <Days />
      </Route>

      <Route path="/:day/:id">
        <Events />
      </Route>

      <Route path="/:month/:id">
        <NotesList />
      </Route>

    </div>
  );
}

export default App;
