import Calendar from "./components/Calendar";
import EventsPage from "./components/EventsPage";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";
import { notesBaseURL, eventsBaseURL, config } from "./services";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
  const [calendarInfo, setCalendarInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [eventToggleFetch, setEventToggleFetch] = useState(true);
  const [eventsInfo, setEventsInfo] = useState([]);
  const [month, setMonth] = useState("Month");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [startDay, setStartDay] = useState("Start day");
  const [year, setYear] = useState(0);

  useEffect(() => {                                                       //the notes table of the api is called to access information and any updated information
    const callAPI = async () => {
      const notesResp = await axios.get(notesBaseURL, config);
      setCalendarInfo(notesResp.data.records);
    };
    callAPI();
  }, [toggleFetch]);

  useEffect(() => {                                                       //the events table of the api is called to access information and any updated information
    const callAPI = async () => {
      const eventsResp = await axios.get(eventsBaseURL, config);
      setEventsInfo(eventsResp.data.records);
    };
    callAPI();
  }, [eventToggleFetch]);

  return (                                                                
    <div className="App">                                                 
      <Route exact path="/">                                                {/* homepage renders in the home route and takes in the getters and setters so it can update the notes table */}
        <Homepage                                                         
          setToggleFetch={setToggleFetch}
          setMonth={setMonth}
          month={month}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
          setStartDay={setStartDay}
          startDay={startDay}
          setYear={setYear}
          year={year}
        />
      </Route>

      <Route path="/calendar">                                             {/* calendar is rendered in the calendar route and takes in the numberOfDays information other calendar features */}
        <Calendar
          calendarInfo={calendarInfo}
          eventsInfo={eventsInfo}
          setToggleFetch={setToggleFetch}
          startDay={startDay}
          numberOfDays={numberOfDays}
          month={month}
          year={year}
        />
      </Route>

      <Route path="/events/:year/:month/:day/">                             {/* the eventspage is renders in the events route that has params of the year, day and month to identify specific information from specific days */}
        <EventsPage                                                       
          eventsInfo={eventsInfo}
          setEventToggleFetch={setEventToggleFetch}
          setNumberOfDays={setNumberOfDays}
          numberOfDays={numberOfDays}
        />
      </Route>
    </div>
  );
}

export default App;
