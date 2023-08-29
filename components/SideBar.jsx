'use client'

import "../styles/NavBar.css"
import { useState, useEffect, useRef, useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import ProfileBar from "./sidebar/ProfileBar"
import CategoryList from "./sidebar/CategoryList"
import { HiOutlineSearch } from "react-icons/hi"

export default function SideBar () {

  const { ConfigData,  modalFilterOpen, setModalFilterOpen } = useContext(MenuContext)
  const sideBarRef = useRef(null)
  const inputSideBarRef = useRef(null)
  const [ scroll, setScroll ] = useState(false)

  const toggleSideBar = (e) => {
    if (sideBarRef.current) {
      sideBarRef.current.style.display = 'block'
    }
    setScroll(e.target.checked)
  }

  const handleButtonFilter = () => {
    setModalFilterOpen(!modalFilterOpen)
    inputSideBarRef.current.checked = false
    setScroll(false)
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
      <button className="button-filter" onClick={handleButtonFilter}>
        <div className="search-icon">
          <HiOutlineSearch /> 
        </div>
        BUSCAR
      </button>
      <CategoryList updateInputValue={setScroll} identifier="movil"/>
    </nav>
    <label className="background-side-bar" htmlFor="toggle-side-bar"></label>
    </>
  )
}