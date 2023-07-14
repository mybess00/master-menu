'use client'

import "../../styles/ProfileSection.css"
import { FaLocationDot as LocationIcon, FaRegClock as ClockIcon } from 'react-icons/fa'
import  {BsFillCalendarDateFill as CalendarIcon} from 'react-icons/bs'

export default function Tags ({ date, hour, address}) {
  return (
    <div>
      <div>
        {CalendarIcon}
        {date}
      </div>
      <div>
        {ClockIcon}
        {hour}
      </div>
      <div>
        {LocationIcon}
        {address}
      </div>
    </div>
  )
}