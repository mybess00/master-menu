'use client'

import "/styles/Topbar.scss"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import { MenuContext } from "context/MenuContext"
import SocialMedia from "components/profile/SocialMedia"
import ScheduleTag from "components/ScheduleTag"

export default function TopBar () {

  const { ConfigData } = useContext(MenuContext)
  const { name, social } = ConfigData.info
  const router = useRouter()
  const goHome = () => router.replace(`/${ConfigData.id}`)
  return (
    <nav className="top-bar-container">
      <div className="info-top-bar">
        <h1 onClick={goHome}>
          {name}
        </h1>
        <ScheduleTag />
      </div>
      <SocialMedia social={social}/>
    </nav>
  )
}