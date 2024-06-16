import "styles/sidebar/ProfileBar.scss"
import ScheduleTag from "components/ScheduleTag"

export default function ProfileBar ({ info }) {
  return (
    <div>
      <div className="info-profile-bar">
        <h1>{info.name}</h1>
        <ScheduleTag />
      </div>
    </div>
  )
}