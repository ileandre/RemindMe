import { Link } from "react-router-dom"

function Days(props) {
  const { month, numberOfDays, startDay, year, num} = props

  return(
    <Link to={`/events/${year}/${month}/${num}`}>
      <div className="dates">
        <h3 className="dateNumbers">{props.num}</h3>
        <div className="dateSpaces">
        </div>
      </div>
    </Link>
  )
}

export default Days