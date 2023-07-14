import "../styles/NavBar.css"
import Config from "../data-menu.json"

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
      <div>=</div>
    </nav>
  )
}