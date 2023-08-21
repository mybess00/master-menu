'use client'

import "../styles/Topbar.css"
import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import SocialMedia from "./profile/SocialMedia"
import ScheduleTag from "./ScheduleTag"

export default function TopBar () {

  const { ConfigData } = useContext(MenuContext)
  const { name, social } = ConfigData.info

  return (
    <nav className="top-bar-container">
      <div className="info-top-bar">
        <h1>{name}</h1>
        <ScheduleTag />
      </div>
      <SocialMedia social={social}/>
    </nav>
  )
}