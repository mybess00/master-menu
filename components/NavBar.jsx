import "../styles/NavBar.css"
import ButtonClose from "./ButtonClose"

export default function NavBar ({ title }) {

  return (
    <nav className="nav-container">
      <ButtonClose />
      <h2>{title}</h2>
      <label className="btn-side-bar" for="toggle-side-bar">=</label>
    </nav>
  )
}