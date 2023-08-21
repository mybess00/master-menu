'use client'

import "../styles/NavBar.css"
import { useState, useEffect, useRef, useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import ProfileBar from "./sidebar/ProfileBar"
import CategoryList from "./sidebar/CategoryList"

export default function SideBar () {

  const { ConfigData } = useContext(MenuContext)
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
    const documentElement = document.documentElement
    if (scroll) {
      documentElement.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        inputSideBarRef.current.checked = false
        sideBarRef.current.style = "none"
        documentElement.style.overflow = ""
        
      },500)
    }
  }, [scroll])

  return (
    <>
    <input type="checkbox" name="toggle-side-bar" ref={inputSideBarRef} id="toggle-side-bar" value={scroll} className="input-toggle-side-bar" onChange={toggleSideBar}/>
    <nav className="side-bar" ref={sideBarRef}>
      <ProfileBar info={ConfigData.info}/>
      <CategoryList updateInputValue={setScroll}/>
    </nav>
    <label className="background-side-bar" htmlFor="toggle-side-bar"></label>
    </>
  )
}