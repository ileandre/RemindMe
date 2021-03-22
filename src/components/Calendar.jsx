import Days from "../components/Days";
import NotesList from "../components/NotesList";
import NotesForm from "../components/NotesForm";
import { Link, useHistory } from "react-router-dom";

function Calendar(props) {
  const { month, numberOfDays, year, startDay } = props;
  const numOfDaysArr = [];
  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const history = useHistory();

  let d = 0;
  if (startDay === "Monday") {
    d = 1;
  } else if (startDay === "Tuesday") {
    d = 2;
  } else if (startDay === "Wednesday") {
    d = 3;
  } else if (startDay === "Thursday") {
    d = 4;
  } else if (startDay === "Friday") {
    d = 5;
  } else if (startDay === "Saturday") {
    d = 6;
  }

  for (let day = 1 - d; day <= numberOfDays; day++) {
    numOfDaysArr.push(
      <>
        <Days day={day} month={month} year={year} numberOfDays={numberOfDays} />
      </>
    );
  }

  if (numberOfDays === 0) {
    history.push("/");
  }

  return (
    <div className="calendarPage">
      <nav className="calendarNav">
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <span className="remind">Remind</span>
          <span className="me">Me</span>
        </div>
      </nav>
      <h1 className="calendarMonth">{month} </h1>
      <p className="calendarYear">{year}</p>
      <div className="calendarBoard">
        <div className="calendar">
          {daysArr.map((day, index) => {
            return (
              <div key={index} className="dayNames">
                {day.toString()}
              </div>
            );
          })}
          {numOfDaysArr}
        </div>
        <div className="notesList">
          <h1 className="notesTitle">Notes </h1>
          {props.calendarInfo.map((note, index) => {
            return note.fields.note &&
              note.fields.year === parseInt(year) &&
              note.fields.month === month.toString() ? (
              <NotesList
                key={index}
                note={note}
                setToggleFetch={props.setToggleFetch}
              />
            ) : null;
          })}

          <NotesForm
            key={props.eventsInfo.id}
            month={month}
            year={year}
            setToggleFetch={props.setToggleFetch}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
