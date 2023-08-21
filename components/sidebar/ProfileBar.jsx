import "../../styles/NavBar.css"
import VerticalDivider from "../VerticalDivider"
import ScheduleTag from "../ScheduleTag"

export default function ProfileBar ({ info }) {
  return (
    <div>
      <div className="info-profile-bar">
        <VerticalDivider color={"green"} width={7} />
        <h1>{info.name}</h1>
        <ScheduleTag />
      </div>
    </div>
  )
}