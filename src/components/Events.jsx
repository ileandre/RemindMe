import {useParams} from "react-router-dom"

// import EventsForm from "../components/EventsForm"
// console.log("You're in the events component")
function Events() {
const params = useParams()
const { year, month, day } = params
  
  return (
    <div>
      <h1>You're in the events component</h1>
      {/* <EventsForm /> */}
      <h2>{`${year}${month}${day}`}</h2>
    </div>

  )
}

export default Events