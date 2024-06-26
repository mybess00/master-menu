import "styles/Dividers.scss"

export default function HorizontalDivider ({ color, height}) {
  return (
    <div 
      className="horizontal-divider"
      style={{
        backgroundColor: color,
        height
      }}>
    </div>
  )
}