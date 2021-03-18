import { Link } from "react-router-dom"

function Days(props) {
  const { month, year, day } = props

  return(
    <Link to={`/events/${year}/${month}/${day}`}>
      <div className="days">
        <h3 className="dayNumbers">{day}</h3>
        <div className="daySpaces">
        </div>
      </div>
    </Link>
  )
}

export default Days