import NavBar from "../../../components/NavBar"
import Config from "../../../data-menu.json"

export default function LayoutCategoty ({ children, params }) {

  const { category } = params

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