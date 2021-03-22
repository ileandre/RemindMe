import axios from "axios";
import { eventsBaseURL, config } from "../services";

function Events(props) {
  const task = props.event.fields;

  const erase = async () => {
    const eraseEventURL = `${eventsBaseURL}/${props.event.id}`;
    await axios.delete(eraseEventURL, config);
    props.setEventToggleFetch((curr) => !curr);
  };

  return (
    <div className="events">
      <div className="eventInfo">
        <p>
          <span>Title:</span> {task.title}
        </p>
        <p>
          <span>Time:</span> {task.time}
        </p>
        <p>
          <span>Description:</span> {task.description}
        </p>
      </div>
      <div className="eventDeleteButton">
        <button onClick={erase}>Delete</button>
      </div>
    </div>
  );
}

export default Events;
