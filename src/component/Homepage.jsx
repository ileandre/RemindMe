function Homepage() {

  const months = [Januray, Feburary, March, April, May, June, July, August, September, October, November, December]
  const numberOfDays = [28, 29, 30, 31]
  const days = [Monday, Tuesday, Wednesday, Thursday, Friday]
  const years = []

  for (let year = 2021; year <= 2121; year++) (
    years.push(year)
  )
  console.log(years)

  return (
    <div className="homepage">
      <h1>Welcome to <span>RemindMe</span></h1>
      <p>Choose the month, number of days in that month, its start day and the year of the month you'd like to plan out.</p>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Month'>Month</option>
        {months.forEach(month => {
          <option value={month}>{month}</option>
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Number of days'>Number of days</option>
        {numberOfDays.forEach(num => {
          <option value={num}>{num}</option>
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Start day'>Start day</option>
        {days.forEach(day => {
          <option value={day}>{day}</option>
        })}
      </select>
      <select name='filter' className="homepageFilters">
        <option disabled selected value='Year'>Year</option>
        {years.forEach(year => {
          <option value={year}>{year}</option>
        })}
      </select>
    </div>
  )
}

export default Homepage