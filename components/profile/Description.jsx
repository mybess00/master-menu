import "styles/ProfileSection.scss"
import HorizontalDivider from "components/HorizontalDivider"

export default function Description ({ description }) {
  return (
    <div className="container-description">
      <HorizontalDivider color={"gray"} height={2}/>
      {description}
      <HorizontalDivider color={"gray"} height={2}/>
    </div>
  )
}