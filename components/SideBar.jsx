'use client'

import "../styles/NavBar.css"
import { useState, useEffect } from "react"
import ProfileBar from "./sidebar/ProfileBar"
import CategoryList from "./sidebar/CategoryList"
import Config from "../data-menu.json"

export default function SideBar () {

  // Bloquear desplazamiento scroll Y al mostrar el SideBar
  const [ scroll, setScroll ] = useState(true)
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
      <ProfileBar/>
      <CategoryList categories={Config.category} />
    </nav>
    <label className="background-side-bar" for="toggle-side-bar"></label>
    </>
  )
}