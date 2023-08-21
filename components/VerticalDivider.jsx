import "../styles/Dividers.css"

export default function VerticalDivider ({ color, width }) {
  return (
    <div 
      className="vertical-divider"
      style={{
        backgroundColor: color,
        width
      }}>
    </div>
  )
}