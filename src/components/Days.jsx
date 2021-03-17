import { Link } from "react-router-dom"

function Days(props) {
  const { month, year, date} = props

  return(
    <Link to={`/events/${year}/${month}/${date}`}>
      <div className="dates">
        <h3 className="dateNumbers">{date}</h3>
        <div className="dateSpaces">
        </div>
      </div>
    </Link>
  )
}

export default Days