import NavBar from "../../../components/NavBar"
import fileJSON from "../../../data-menu.json"
import Modal from "../../../components/Modal"

export default function LayoutCategoty ({ children, params }) {

  const { menu, category, id } = params
  const Config = fileJSON[menu]

  const categoryOptions = Config["category"].find(({ id }) => id == category)
  
  return (
    <>
    <NavBar title={categoryOptions.name}/>
    <div>
      {children}
    </div>
    </>
  )
}