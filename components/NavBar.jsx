import "../styles/NavBar.css"
import ButtonClose from "./ButtonClose"

export default function NavBar ({ title }) {

  return (
    <nav className="nav-container">
      <ButtonClose />
      <h2>{title}</h2>
      <label className="btn-side-bar" htmlFor="toggle-side-bar">
        <div className="child-btn-side-bar up-icon"></div>
        <div className="child-btn-side-bar down-icon"></div>
      </label>
    </nav>
  )
}