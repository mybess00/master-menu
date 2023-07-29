import "../../styles/Agregos.css"
import VerticalDivider from "../VerticalDivider"
import AgregosList from "./AgregosList"

export default function Agregos ({ agregos }) {
  return (
    <div className="main-container-agregos">
      <div className="title-agregos">
        <VerticalDivider color={"green"} width={4}/>
        Agregos ➕
      </div>
      {<AgregosList agregos={agregos}/>}
    </div>
  )
}