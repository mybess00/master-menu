import "../styles/NavBar.css"
import Config from "../data-menu.json"
import SideBar from "./SideBar"

export default function NavBar ({ id }) {
  const categories = Config.category

  const name = categories.map((element) => {
    if (element.id == id) {
      return element.name
    }
  })

  return (
    <nav className="nav-container">
      <div>X</div>
      <h2>{name}</h2>
      <label className="btn-side-bar" for="toggle-side-bar">=</label>
      <SideBar />
    </nav>
  )
}