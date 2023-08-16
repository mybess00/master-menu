'use client'

import "../styles/NavBar.css"
import { useState, useEffect, useRef } from "react"
import ProfileBar from "./sidebar/ProfileBar"
import CategoryList from "./sidebar/CategoryList"
import fileJSON from "../data-menu.json"

export default function SideBar ({ menu }) {

  const Config = fileJSON[menu]
  const sideBarRef = useRef(null)
  const inputSideBarRef = useRef(null)

  const [ scroll, setScroll ] = useState(false)

  const toggleSideBar = (e) => {
    if (sideBarRef.current) {
      sideBarRef.current.style.display = 'block'
    }
    setScroll(e.target.checked)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    if (scroll) {
      body.style.position = "fixed"
      body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        inputSideBarRef.current.checked = false
        sideBarRef.current.style = "none"
        body.style.position = ""
        body.style.overflow = ""
        
      },500)
    }
  }, [scroll])

  return (
    <>
    <input type="checkbox" name="toggle-side-bar" ref={inputSideBarRef} id="toggle-side-bar" value={scroll} className="input-toggle-side-bar" onChange={toggleSideBar}/>
    <nav className="side-bar" ref={sideBarRef}>
      <ProfileBar menu={menu}/>
      <CategoryList categories={Config.category} updateInputValue={setScroll}/>
    </nav>
    <label className="background-side-bar" htmlFor="toggle-side-bar"></label>
    </>
  )
}