import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Events from "./Events";
import EventsForm from "./EventsForm";
import Footer from "./Footer";

function EventsPage(props) {
  const params = useParams();
  const { year, month, day } = params;

  let arrAM = [];
  let arrPM = [];
  let eArray = [];
  let orderedArray = [];

  const toInteger = () => {                                         //this function removes the colon from your time column of the events table in your api and adds am and pm
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
          arrAM.push(num);                                        //holds all the event times
        }
        if (num.includes("pm")) {
          arrPM.push(num);
        }

        eArray.push(props.eventsInfo[i]);                         //holds all the events objects 
      }
    }
  };
  toInteger();

  const inOrder = () => {                                         //This function sorts the times and pushes the corresponding api object to the orderedArray
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
      <div className="mainInfo">
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
            {/* maps all the event objects fomr the orderedArray rray and renders the event component */ }
            return (
              <Events
                key={index}
                event={event}
                setEventToggleFetch={props.setEventToggleFetch}
              />
            );
          })}

          <div className="eventsForm">                                 {/*renders the form*/}
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
      <Footer />
    </div>
  );
}

export default EventsPage;
