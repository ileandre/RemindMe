import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Events from "./Events";
import EventsForm from "./EventsForm";

function EventsPage(props) {
  const params = useParams();
  const { year, month, day } = params;

  let arrAM = [];
  let arrPM = [];
  let eArray = [];
  let orderedArray = [];

  const toInteger = () => {
    for (let i = 0; i < props.eventsInfo.length; i++) {
      let event = props.eventsInfo[i];
      if (
        event.fields.time &&
        event.fields.year === parseInt(year) &&
        event.fields.month === month.toString() &&
        event.fields.day === parseInt(day)
      ) {
        let time = event.fields.time.split(":");
        let num = time.join("");

        event.fields.tempTime = num;

        if (num.includes("am")) {
          arrAM.push(num);
        }
        if (num.includes("pm")) {
          arrPM.push(num);
        }

        eArray.push(props.eventsInfo[i]);
      }
    }
  };
  toInteger();

  const inOrder = () => {
    arrAM.sort(function (a, b) {
      return a - b;
    });
    arrPM.sort(function (a, b) {
      return a - b;
    });

    arrAM.forEach((time) => {
      for (let i = 0; i < eArray.length; i++) {
        if (eArray[i].fields.tempTime.includes(time)) {
          orderedArray.push(eArray[i]);
        }
      }
    });

    arrPM.forEach((time) => {
      for (let i = 0; i < eArray.length; i++) {
        if (eArray[i].fields.tempTime.includes(time)) {
          orderedArray.push(eArray[i]);
        }
      }
    });
  };
  inOrder();

  return (
    <div className="eventPage">
      <div className="eventNav">
        <Link to="/calendar">
          <button>Calendar</button>
        </Link>
      </div>
      <div className="eventList">
        <p className="dayDateTitle">
          {month} {day}, {year}
        </p>
        <h2>Events</h2>
        {orderedArray.map((event, index) => {
          return (
            <Events
              key={index}
              event={event}
              setEventToggleFetch={props.setEventToggleFetch}
            />
          );
        })}

        <div className="eventsForm">
          <h3>Form</h3>
          <EventsForm
            year={year}
            month={month}
            day={day}
            setEventToggleFetch={props.setEventToggleFetch}
          />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
