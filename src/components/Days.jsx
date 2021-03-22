import { Link } from "react-router-dom";

function Days(props) {
  const { month, year, day } = props;

  let num;
  if (day < 1) {
    num = " ";
  } else {
    num = day.toString();
  }

  return (
    <Link to={`/events/${year}/${month}/${day}`}>
      <div className="days">
        <h3 className="dayNumbers">{num}</h3>
      </div>
    </Link>
  );
}

export default Days;
