import axios from "axios"
import { useHistory } from "react-router-dom"
import { notesBaseURL, config } from "../services"
// import {useState} from 'react'

function Homepage(props) {
  const { setMonth, setNumberOfDays, setStartDay, setYear } = props
  const { month, numberOfDays, startDay, year } = props
  const monthsArr = ["Januray", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const numberOfDaysArr = [28, 29, 30, 31]
  const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const yearsArr = []
  // const [month, setMonth] = useState("Month")
  // const [numberOfDays, setNumberOfDays] = useState("Number of days")
  // const [startDay, setStartDay] = useState("Start day")
  // const [year, setYear] = useState("Year")
  const history = useHistory()
  
  for (let year = 2021; year <= 2121; year++) (
    yearsArr.push(year)
  )
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(numberOfDays)
    // console.log(year)
    if (month !== "Month" && numberOfDays
      !== "Number of days" && startDay
      !== "Start day" && year !== "Year") {
      const newCalendarInfo = {
        month,
        note: "",
        numberOfDays,
        startDay,
        year,
      }
      // console.log(newCalendarInfo)
      await axios.post(notesBaseURL,{fields: newCalendarInfo}, config)
    } else {
      <h2>"Please fill in ALL the fields."</h2>
    }
    props.setToggleFetch((curr) => !curr)
    history.push("/calendar")

  }
  
  return (
    <div className="homepage">

      <h1>Welcome to <span>RemindMe</span></h1>
      <p>Choose the month, number of days in that month, its start day and the year of the month you'd like to plan out.</p>
      
      <form onSubmit={handleSubmit}>
        <select required name='filter'
          className="homepageFilters"
          id="monthFilter"
          onChange={(e) => setMonth(e.target.value)}>
            <option disabled selected value='Month'>Month</option>
            {monthsArr.map(month => {
              return (
                <option value={month}>{month}</option>
              )
            })}
        </select>

        <select name='filter'
          className="homepageFilters"
          id="numberOfDaysFilter"
          onChange={(e) => setNumberOfDays(parseInt(e.target.value))}>
            <option disabled selected value='Number of days'>Number of days</option>
            {numberOfDaysArr.map(num => {
              return (
                <option value={num}>{num}</option>
              )
            })}
        </select>
        
        <select name='filter'
          className="homepageFilters"
          id="startDayFilter"
          onChange={(e) => setStartDay(e.target.value)}>
            <option disabled selected value='Start day'>Start day</option>
            {daysArr.map(day => {
              return (
                <option value={day}>{day}</option>
              )
            })}
        </select>

        <select name='filter'
          className="homepageFilters"
          id="yearFilter"
          onChange={(e) => setYear(parseInt(e.target.value))}>
            <option disabled selected value='Year'>Year</option>
            {yearsArr.map(year => {
              return (
                <option value={year}>{year}</option>
              )
            })}
        </select>

        <div>
          {/* <Link to="/calendar"> */}
            <button type="submit">Create Calendar</button>
          {/* </Link> */}
        </div>
      </form>

    </div>
  )
}

export default Homepage

