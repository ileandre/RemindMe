import axios from 'axios'
import {eventsBaseURL, config} from "../services"
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

function EventsForm(props) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [timeHours, setTimeHours] = useState("")
  const [timeMinutes, setTimeMinutes] = useState("")
  const [timeUnits, setTimeUnits] = useState("")
  const timeHoursArr = []
  const timeMinutesArr = []
  const timeUnitsArr = [" am", " pm"]
  // const params = useParams()


  // useEffect(() => {
  //   if (params.id) {
  //     const editEvent = props.eventsInfo.find((event) => event.id === params.id)
  //     console.log(params.id)
  //     if (editEvent) {
  //       setTitle(editEvent.fields.title)
  //       setTime(editEvent.fields.time)
  //       setDescription(editEvent.fields.description)
  //     }
  //   }
  // },[props.eventInfo, params.id])

  for (let hour = 1; hour <= 12; hour++) {
    
    if (hour < 10) {
      hour = `0${hour}`
    }
    else {
      hour = `${hour}`
    }
    timeHoursArr.push(hour)
}
  console.log(timeHoursArr)

  for (let min = 1; min < 60; min++) {

    if (min < 10) {
      min = `0${min}`
    }
    timeMinutesArr.push(`:${min}`)

  }
  console.log(timeMinutesArr)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newEvent = {
      title,
      timeHours,
      timeMinutes,
      timeUnits,
      description,
      month: props.month,
      day: parseInt(props.day),
      year: parseInt(props.year)
    }
    await axios.post(eventsBaseURL, {fields: newEvent}, config)
    props.setEventToggleFetch((curr) => !curr)
    setTitle("")
    setTime("")
    setDescription("")
  }

  return (
    <div className="eventForm">
    <form onSubmit={handleSubmit}>
      <label>Title: 
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>Time: 
        {/* <input required type="time" value={time} onChange={(e) => setTime(e.target.value)}/> */}
          
        <select defaultValue="Hours" 
          name='filter'
          id="hourFilter"
          onChange={(e) => setTimeHours(e.target.value)}>
            <option disabled value='Hours'>Hours</option>
            {timeHoursArr.map((hour, index) => {
              return (
                <option key={index} value={hour}>{hour}</option>
              )
            })}
          </select>
          
          <select defaultValue="Minutes" 
          name='filter'
          id="minuteFilter"
          onChange={(e) => setTimeMinutes(e.target.value)}>
            <option disabled value='Minutes'>Minutes</option>
            {timeMinutesArr.map((min, index) => {
              return (
                <option key={index} value={min}>{min}</option>
              )
            })}
          </select>
          
          <select defaultValue="Units" 
          name='filter'
          id="unitsFilter"
          onChange={(e) => setTimeUnits(e.target.value)}>
            <option disabled value='Units'>Units</option>
            {timeUnitsArr.map((unit, index) => {
              return (
                <option key={index} value={unit}>{unit}</option>
              )
            })}
          </select>

      </label>
      <label>Description: </label>
        <textarea required type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <div className="eventsFormButton">
          <button type="submit">Add Event</button>
        </div>
    </form>
    </div>
  )
}

export default EventsForm