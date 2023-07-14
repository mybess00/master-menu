import "../../styles/ProfileSection.css"

export default function Tags ({ date, hour, address}) {
  return (
    <div>
      <div>
        {date}
      </div>
      <div>
        {hour}
      </div>
      <div>
        {address}
      </div>
    </div>
  )
}