'use client'

import "../styles/NavBar.css"
import { useState, useEffect } from "react"
import ProfileBar from "./sidebar/ProfileBar"
import CategoryList from "./sidebar/CategoryList"
import fileJSON from "../data-menu.json"

export default function SideBar ({ menu }) {

  const Config = fileJSON[menu]
  // Bloquear desplazamiento scroll Y al mostrar el SideBar
  const [ scroll, setScroll ] = useState(false)
  const toggleSideBar = (e) => {
    setScroll(e.target.checked)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    if (scroll) {
      body.style.position = "fixed"
      body.style.overflow = "hidden"
    } else {
      body.style.position = ""
      body.style.overflow = ""
    }
  }, [scroll])

  return (
    <>
    <input type="checkbox" name="toggle-side-bar" id="toggle-side-bar" className="input-toggle-side-bar" onChange={toggleSideBar}/>
    <nav className="side-bar">
      <ProfileBar menu={menu}/>
      <CategoryList categories={Config.category} />
    </nav>
    <label className="background-side-bar" htmlFor="toggle-side-bar"></label>
    </>
  )
}