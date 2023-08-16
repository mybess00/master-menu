import "./style.css"
import ButtonClose from "../../../components/ButtonClose"

export default function LayoutCart ({ children }) {
  return (
    <>
      <nav className="nav-container">
          <ButtonClose />
        <h2 className="center-title">
          Carrito
        </h2>
      </nav>
      {children}
    </>
  )
}