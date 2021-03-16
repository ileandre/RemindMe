import axios from "axios"
import { Link } from "react-router-dom"
import { notesBaseURL, config } from "../services"
import {useState, useEffect} from 'react'

function Homepage(props) {

  const monthsArr = ["Januray", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const numberOfDaysArr = [28, 29, 30, 31]
  const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const yearsArr = []
  const [month, setMonth] = useState("Month")
  const [numberOfDays, setNumberOfDays] = useState("Number of days")
  const [startDay, setStartDay] = useState("Start day")
  const [year, setYear] = useState("Year")
  // const history = useHistory()
  
  for (let year = 2021; year <= 2121; year++) (
    yearsArr.push(year)
  )
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (month !== "Month" && numberOfDays !== "Number of days" && startDay !== "Start day" && year !== "Year") {
      const newCalendarInfo = {
        month,
        notes: "",
        numberOfDays,
        startDay,
        year,
      }
      console.log(newCalendarInfo)
      await axios.post(notesBaseURL,{fields: newCalendarInfo}, config)
    }
    props.setToggleFetch((curr) => !curr)
    // history.push("/calendar")
    // { <Link to="/calendar" /> }
  }
  
  return (
    <div className="homepage">
      <h1>Welcome to <span>RemindMe</span></h1>
      <p>Choose the month, number of days in that month, its start day and the year of the month you'd like to plan out.</p>
      <form onSubmit={handleSubmit}>
        <select name='filter' className="homepageFilters" id="monthFilter" onChange={(e) => setMonth(e.target.value)}>
          <option disabled selected value='Month'>Month</option>
            {monthsArr.map(month => {
              return (
                <option value={month}>{month}</option>
              )
            })}
        </select>
        <select name='filter' className="homepageFilters" id="numberOfDaysFilter" onChange={(e) => setNumberOfDays(e.target.value)}>
          <option disabled selected value='Number of days'>Number of days</option>
            {numberOfDaysArr.map(num => {
              return (
                <option value={num}>{num}</option>
              )
            })}
          {/* {console.log(numberOfDays)} */}
        </select>
        <select name='filter' className="homepageFilters" id="startDayFilter" onChange={(e) => setStartDay(e.target.value)}>
          <option disabled selected value='Start day'>Start day</option>
            {daysArr.map(day => {
              return (
                <option value={day}>{day}</option>
              )
            })}
          {/* {console.log("start day selected")} */}
        </select>
        <select name='filter' className="homepageFilters" id="yearFilter" onChange={(e)=> setYear(e.target.value)}>
          <option disabled selected value='Year'>Year</option>
            {yearsArr.map(year => {
              return (
                <option value={year}>{year}</option>
              )
            })}
          {/* {console.log("year selected")} */}
        </select>
        <div>
          <Link to="/calendar">
            <button type="submit">Create Calendar</button>
          </Link>
          </div>
      </form>
    </div>
  )
}

export default Homepage



//------------------------Functional component---------------------------//

// import axios from "axios"
// // import { Link } from "react-router-dom"
// import { notesBaseURL, config } from "../services"
// import {useState} from 'react'

// function Homepage() {

//   const monthsArr = ["Januray", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//   const numberOfDaysArr = [28, 29, 30, 31]
//   const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
//   const yearsArr = []
//   const [month, setMonth] = useState("Month")
//   const [numberOfDays, setNumberOfDays] = useState("Number of days")
//   const [startDay, setStartDay] = useState("Start day")
//   const [year, setYear] = useState("Year")

//   for (let year = 2021; year <= 2121; year++) (
//     yearsArr.push(year)
//   )

//   const handleSelect = (value, selector) => {
//     if (selector === "month") {
//       console.log(value)
//     setMonth(value)
//     console.log(month)
//     } else if (selector === "numberOfDays") {
//       setNumberOfDays(value)
//       console.log(numberOfDays)
//     } else if (selector === "startDay") {
//       setStartDay(value)
//       console.log(startDay)
//     } else if (selector === "year") {
//       setYear(value)
//       console.log(year)
//       }
// }

//   const handleSubmit = async () => {
//     if (month !== "Month" && numberOfDays !== "Number of days" && startDay !== "Start day" && year !== "Year") {
//       const newCalendarInfo = {
//         month,
//         notes: "",
//         numberOfDays,
//         year,
//         startDay,
//       }
//       console.log(newCalendarInfo)
//       await axios.post(notesBaseURL,{fields: newCalendarInfo}, config)
//     }
//   }
  
  
  

  


//   return (
//     <div className="homepage">
//       <h1>Welcome to <span>RemindMe</span></h1>
//       <p>Choose the month, number of days in that month, its start day and the year of the month you'd like to plan out.</p>
//       <form onSubmit={handleSubmit}>
//         <select name='filter' className="homepageFilters" id="monthFilter" onChange={(e) => handleSelect(e.target.value, "month")}>
//           <option disabled selected value='Month'>Month</option>
//             {monthsArr.map(month => {
//               return (
//                 <option value={month}>{month}</option>
//               )
//             })}
//           {/* {console.log("month selected")} */}
//         </select>
//         <select name='filter' className="homepageFilters" id="numberOfDaysFilter" onChange={(e) => setNumberOfDays(e.target.value)}>
//           <option disabled selected value='Number of days'>Number of days</option>
//             {numberOfDaysArr.map(num => {
//               return (
//                 <option value={num}>{num}</option>
//               )
//             })}
//           {console.log(numberOfDays)}
//         </select>
//         <select name='filter' className="homepageFilters" id="startDayFilter" onChange={(e) => handleSelect(e.target.value, "startDay")}>
//           <option disabled selected value='Start day'>Start day</option>
//             {daysArr.map(day => {
//               return (
//                 <option value={day}>{day}</option>
//               )
//             })}
//           {/* {console.log("start day selected")} */}
//         </select>
//         <select name='filter' className="homepageFilters" id="yearFilter" onChange={handleSelect(e.target.value, "year")}>
//           <option disabled selected value='Year'>Year</option>
//             {yearsArr.map(year => {
//               return (
//                 <option value={year}>{year}</option>
//               )
//             })}
//           {/* {console.log("year selected")} */}
//         </select>
//         <div>
//           {/* <Link to="/calendar"> */}
//             <button type="submit">Create Calendar</button>
//           {/* </Link> */}
//           </div>
//       </form>
//     </div>
//   )
// }

// export default Homepage