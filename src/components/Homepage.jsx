import axios from "axios"
import { useHistory } from "react-router-dom"
import { notesBaseURL, config } from "../services"
import {useState} from 'react'

function Homepage(props) {
  const { setMonth, setNumberOfDays, setStartDay, setYear } = props
  const { month, numberOfDays, startDay, year } = props
  const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const numberOfDaysArr = [28, 29, 30, 31]
  const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const yearsArr = []
  const history = useHistory()
  const [error, setError] = useState("")
  // const [month, setMonth] = useState("Month")
  // const [numberOfDays, setNumberOfDays] = useState("Number of days")
  // const [startDay, setStartDay] = useState("Start day")
  // const [year, setYear] = useState("Year")
  
  
  for (let year = 2021; year <= 2121; year++) (
    yearsArr.push(year)
  )
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (month !== "Month" && numberOfDays
      !== "Number of days" && startDay
      !== "Start day" && year !== 0) {
      const newCalendarInfo = {
        month,
        note: "",
        numberOfDays,
        startDay,
        year,
      }
      await axios.post(notesBaseURL,{fields: newCalendarInfo}, config)
    } else {
      <h2>"Please fill in ALL the fields."</h2>
    }
    props.setToggleFetch((curr) => !curr)
    
    if (month === "Month" || numberOfDays === 0 || startDay === "Start day" || year === 0) {
      setError("ERROR! You must select all the options.")
    } else  {
      history.push("/calendar")
    }

  }
  
  return (
    <div className="homepage">

      <div className="homeTitle">
        <h1>Welcome to</h1>
        <span className="remind">Remind</span><span className="me">Me</span>
      </div>
      <p>Choose the month, number of days in that month, its start day and the year you'd like to plan out.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="homepageFilters">
        {/* <div className="firstPairOfFilters"> */}
        <select defaultValue="Month"
          name='filter'
          id="monthFilter"
          onChange={(e) => setMonth(e.target.value)}>
            <option disabled value='Month'>Month</option>
            {monthsArr.map((month, index) => {
              return (
                <option key={index} value={month}>{month}</option>
              )
            })}
        </select>

        <select defaultValue="Number of days"
          name='filter'
          id="numberOfDaysFilter"
          onChange={(e) => setNumberOfDays(parseInt(e.target.value))}>
            <option disabled value='Number of days'>Number of days</option>
            {numberOfDaysArr.map((num, index) => {
              return (
                <option key={index} value={num}>{num}</option>
              )
            })}
        </select>
        {/* </div> */}

        {/* <div className="secondPairOfFilters"> */}
        <select defaultValue="Start day" 
          name='filter'
          id="startDayFilter"
          onChange={(e) => setStartDay(e.target.value)}>
            <option disabled value='Start day'>Start day</option>
            {daysArr.map((day, index) => {
              return (
                <option key={index} value={day}>{day}</option>
              )
            })}
        </select>

        <select defaultValue="Year" 
          name='filter'
          id="yearFilter"
          onChange={(e) => setYear(parseInt(e.target.value))}>
            <option disabled value='Year'>Year</option>
            {yearsArr.map((year, index) => {
              return (
                <option key={index} value={year}>{year}</option>
              )
            })}
        </select>
          </div>
          {/* </div> */}
        <div>
          {/* <Link to="/calendar"> */}
            <button type="submit">Create Calendar</button>
          {/* </Link> */}
        </div>
      </form>

      <h3>{error}</h3>
    </div>
  )
}

export default Homepage

