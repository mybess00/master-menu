'use client'

import "../styles/ScheduleTag.css"
import { useContext } from "react"
import { useSchedule } from "../hooks/useSchedule"
import { MenuContext } from "../context/MenuContext"

export default function ScheduleTag () {

  const { ConfigData } = useContext(MenuContext)
  const { from, to } = ConfigData.info.schedule
  const schedule = useSchedule(from, to)

  if (schedule) {
    return (
      <div>
        <p className="badge open">ABIERTO</p>
      </div>
    )
  }
  return (
    <div>
      <p className="badge close">CERRADO</p>
    </div>
  )
}