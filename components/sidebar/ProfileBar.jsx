import "../../styles/NavBar.css"
import VerticalDivider from "../VerticalDivider"

export default function ProfileBar ({ info }) {


  return (
    <div>
      <div className="info-profile-bar">
        <VerticalDivider color={"green"} width={7} />
        <h1>{info.name}</h1>
        <p className="badge open">ABIERTO</p>
      </div>
    </div>
  )
}