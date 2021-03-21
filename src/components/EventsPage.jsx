import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import Events from "./Events"
import EventsForm from "./EventsForm"

function EventsPage(props) {
  const params = useParams()
  const { year, month, day } = params

  let arr = []
  const toInteger = () => {
    
    for (let i = 0; i < props.eventsInfo.length; i++) {
      let event = props.eventsInfo[i]
      if (event.fields.year === parseInt(year) && event.fields.month === month.toString() && event.fields.day === parseInt(day)) {
        console.log(event.fields.time)
        let time = event.fields.time.split(":")
        console.log(time)
        let num = time.join("")
        console.log(num)

        // event.fields.time = num
        console.log(event.fields.time)
        
        arr.push(num)
        console.log(event)
        // parseInt(event.time)
      }
    }

  }
    toInteger()

    const inOrder = () => {
      console.log(arr)

      arr.sort(function (a, b) { return a - b })
      for (let i = 0; i < arr.length; i++) {
        let array = []
        console.log(arr[i])
        if (arr[i] < 1200) {
          array = [...arr[i].split("")]
          console.log(array)
          array.splice(2, 0, ":")
          array.push(" am")
          arr[i] = array.join("")
          // time = array.join("").toString()
          console.log(arr[i])
        } else if (arr[i] > 1159) {
          let temp
          if (arr[i] > 1259) { temp = arr[i] - 1200 }
          console.log(temp)
          array = [...temp.toString().split("")]
          console.log(array)
          if (arr[i] > 1159) {array.splice(0,0,"0")}
          array.splice(2, 0, ":")
          array.push(" pm")
          arr[i] = array.join("")
        } 
        // time.join
      }
console.log(arr)
        // return (
        //   <Events
        //     key={index}
        //     event={event}
        //     eventsInfo={props.eventsInfo}
        //     setEventToggleFetch={props.setEventToggleFetch}
        //     setNumberOfDays={props.setNumberOfDays}
        //     numberOfDays={props.numberOfDays}
        //   />
        // )
    }
  
  inOrder()

  return (
    <div className="eventPage">
      <div className="eventNav">
        <Link to="/calendar">
          <button>Calendar</button>
        </Link>
      </div>
      <div className="eventList">
        <p className="dayDateTitle">{month} {day}, {year}</p>
        <h2>Events</h2>
        {arr.map((time, index) => {
          const event = props.eventsInfo.find((event) => event.fields.time === time)
          return (
            <Events
              key={index}
              event={event}
              eventsInfo={props.eventsInfo}
              setEventToggleFetch={props.setEventToggleFetch}
              setNumberOfDays={props.setNumberOfDays}
              numberOfDays={props.numberOfDays}
            />
          )
        })}
        
        <div className="eventsForm">
          <h3>Form</h3>
          <EventsForm
            year={year}
            month={month}
            day={day}
            eventsInfo={props.eventsInfo}
            setEventToggleFetch={props.setEventToggleFetch}
            setNumberOfDays={props.setNumberOfDays}
            numberOfDays={props.numberOfDays} />
          </div>
        </div>
    </div>

  )
}

export default EventsPage
