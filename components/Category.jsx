export default function Category ({ title, id, children }) {
  return (
    <div className="main-container-category" id={id} key={id}>
      <div className="shape-category">{title}</div>
      <div className="category-container"> 
        {children}
      </div>
    </div>
  )
}