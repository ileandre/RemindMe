import axios from "axios";
import { eventsBaseURL, config } from "../services";
import { useState } from "react";

function EventsForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeHours, setTimeHours] = useState("Hours");
  const [timeMinutes, setTimeMinutes] = useState("Minutes");
  const [timeUnits, setTimeUnits] = useState("Units");
  const timeHoursArr = [];
  const timeMinutesArr = [];
  const timeUnitsArr = [" am", " pm"];
  const [error, setError] = useState("");

  for (let hour = 1; hour <= 12; hour++) {                          //This loop changes the integers to strings with 0 in the beginning of the 1 digit minutes, then pushes the numbers to arrays that hold the hur and minute values
    if (hour < 10) {
      hour = `${hour}`;
    }
    timeHoursArr.push(hour);
  }

  for (let min = 0; min < 60; min++) {
    if (min < 10) {
      min = `0${min}`;
    }
    timeMinutesArr.push(`:${min}`);
  }

  const handleSubmit = async (e) => {                                //accesses the events table in the API to add new events
    e.preventDefault();
    const newEvent = {
      title,
      timeHours,
      timeMinutes,
      timeUnits,
      description,
      month: props.month,
      day: parseInt(props.day),
      year: parseInt(props.year),
    };
    await axios.post(eventsBaseURL, { fields: newEvent }, config);

    if (                                                            //if even one of the time dropdown menu fields is not chosen there will be an error message
      timeHours === "Hours" ||
      timeMinutes === "Minutes" ||
      timeUnits === "Units"
    ) {
      setError("ERROR! You must select all the options for 'Time'.");
    }

    props.setEventToggleFetch((curr) => !curr);
    setTitle("");
    setDescription("");
    setTimeHours();
    setTimeMinutes();
    setTimeUnits();
  };

  return (
    <div className="eventForm">
      <form onSubmit={handleSubmit}>                              {/* This references the handSubmit button that accesses the api */}
        <label>
          Title:
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>                                                   {/* the time input section is generated using arrays that populate the option tags */}
          Time:
          <select
            defaultValue="Hours"
            name="filter"
            id="hourFilter"
            onChange={(e) => setTimeHours(e.target.value)}
          >
            <option disabled value="Hours">
              Hours
            </option>
            {timeHoursArr.map((hour, index) => {
              return (
                <option key={index} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
          <select
            defaultValue="Minutes"
            name="filter"
            id="minuteFilter"
            onChange={(e) => setTimeMinutes(e.target.value)}
          >
            <option disabled value="Minutes">
              Minutes
            </option>
            {timeMinutesArr.map((min, index) => {
              return (
                <option key={index} value={min}>
                  {min}
                </option>
              );
            })}
          </select>
          <select
            defaultValue="Units"
            name="filter"
            id="unitsFilter"
            onChange={(e) => setTimeUnits(e.target.value)}
          >
            <option disabled value="Units">
              Units
            </option>
            {timeUnitsArr.map((unit, index) => {
              return (
                <option key={index} value={unit}>
                  {unit}
                </option>
              );
            })}
          </select>
        </label>
        <label>Description: </label>
        <textarea
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="eventsFormButton">
          <button type="submit">Add Event</button>
        </div>
      </form>

      <h3 className="errorMessage">{error}</h3>
    </div>
  );
}

export default EventsForm;
