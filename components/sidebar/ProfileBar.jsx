import "styles/sidebar/ProfileBar.scss"
import VerticalDivider from "components/VerticalDivider"
import ScheduleTag from "components/ScheduleTag"

export default function ProfileBar ({ info }) {
  return (
    <div>
      <div className="info-profile-bar">
        <VerticalDivider color={"#0891b2"} width={7} />
        <h1>{info.name}</h1>
        <ScheduleTag />
      </div>
    </div>
  )
}