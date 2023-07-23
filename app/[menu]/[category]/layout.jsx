import NavBar from "../../../components/NavBar"
import fileJSON from "../../../data-menu.json"
import Modal from "../../../components/Modal"

export default function LayoutCategoty ({ children, params }) {

  const { menu, category } = params
  const Config = fileJSON[menu]

  const name = Config["category"].map((element) => {
    if (element.id == category) {
      return element.name
    }
  })

  return (
    <>
    <NavBar title={name}/>
    <div>
      {children}
    </div>
    </>
  )
}