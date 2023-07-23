import "../../styles/ProfileSection.css"
import { BsCalendar2DateFill, BsClockFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"

export default function Tags ({ date, hour, address}) {
  return (
    <div className="tag-container">
      <div>
        <BsCalendar2DateFill/>
        <p>{date}</p>
      </div>
      <div>
        <BsClockFill/>
        <p>{hour}</p>
      </div>
      <div>
        <FaLocationDot/>
        <p>{address}</p>
      </div>
    </div>
  )
}