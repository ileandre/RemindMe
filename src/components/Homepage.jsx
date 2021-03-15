import { Link } from "react-router-dom"

function Homepage() {

  const months = ["Januray", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const numberOfDays = [28, 29, 30, 31]
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const years = []

  for (let year = 2021; year <= 2121; year++) (
    years.push(year)
  )

  return (
    <div className="homepage">
      <h1>Welcome to <span>RemindMe</span></h1>
      <p>Choose the month, number of days in that month, its start day and the year of the month you'd like to plan out.</p>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Month'>Month</option>
        {months.map(month => {
          return (
            <option value={month}>{month}</option>
          )
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Number of days'>Number of days</option>
        {numberOfDays.map(num => {
            return (
              <option value={num}>{num}</option>
            )
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Start day'>Start day</option>
        {days.map(day => {
          return (
            <option value={day}>{day}</option>
          )
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Year'>Year</option>
        {years.map(year => {
          return (
            <option value={year}>{year}</option>
          )
        })}
      </select>
      <div>
        <Link to="/calendar">
          <button>Create Calendar</button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage