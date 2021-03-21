import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import Events from "./Events"
import EventsForm from "./EventsForm"

function EventsPage(props) {
  const params = useParams()
  const { year, month, day } = params

  let arr = []
  let eArray = []
  let orderedArray = []

  const toInteger = () => {
    
    for (let i = 0; i < props.eventsInfo.length; i++) {
      let event = props.eventsInfo[i]
      if (event.fields.year === parseInt(year) && event.fields.month === month.toString() && event.fields.day === parseInt(day)) {
        // console.log(event.fields.time)
        let time = event.fields.time.split(":")
        // console.log(time)
        let num = time.join("")
        // console.log(num)

        event.fields.time = num
        // console.log(event.fields.time)
        
        arr.push(num)
        eArray.push(props.eventsInfo[i])

        console.log(num)
        console.log(props.eventsInfo[i])
        // parseInt(event.time)
      }
    }

  }
  toInteger()

  const inOrder = () => {
    // console.log(arr)

    arr.sort(function (a, b) { return a - b })
    console.log(arr)

    arr.forEach((time) => {
      for (let i = 0; i < eArray.length; i++) {
        console.log(eArray[i])
        if (time === eArray[i].fields.time) {
          let array = []
          console.log(time)
          console.log(eArray[i].fields.time)
          if (time < 1200) {
            array = [...time.split("")]
            console.log(array)
            array.splice(2, 0, ":")
            array.push(" am")
            eArray[i].fields.time = array.join("")
            // time = array.join("").toString()
            // console.log(time)
          } else if (time > 1159) {
            let temp
            if (time > 1259) { temp = time - 1200 }
            console.log(temp)
            array = [...temp.toString().split("")]
            console.log(array)
            if (time > 1159) { array.splice(0, 0, "0") }
            console.log(array)
            array.splice(2, 0, ":")
            console.log(array)
            array.push(" pm")
            array = [...array]
            console.log(array)
            time = array.join("")
            console.log(time)
            // eArray[i].fields.time = array.join("")
            eArray[i].fields.time = time.toString()
            console.log(eArray[i])
            orderedArray.push(eArray[i])
          }
        }
      }
    })
  }
  inOrder()
      // for (let i = 0; i < arr.length; i++) {
        // let array = []
        // // console.log(arr[i])
        // if (time < 1200) {
        //   array = [...time.split("")]
        //   // console.log(array)
        //   array.splice(2, 0, ":")
        //   array.push(" am")
        //   time = array.join("")
        //   // time = array.join("").toString()
        //   // console.log(arr[i])
        // } else if (time > 1159) {
        //   let temp
        //   if (time > 1259) { temp = time - 1200 }
        //   // console.log(temp)
        //   array = [...temp.toString().split("")]
        //   // console.log(array)
        //   if (time > 1159) {array.splice(0,0,"0")}
        //   array.splice(2, 0, ":")
        //   array.push(" pm")
        //   event.fields.time = array.join("")
        // } 
        // time.join
      // }
// console.log(arr)
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
        {eArray.map((event, index) => {
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
