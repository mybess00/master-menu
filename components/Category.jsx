export default function Category ({ title, id, children }) {
  return (
    <div className="main-container-category" id={id}>
      <label htmlFor={`toggle-categories-${id}`}  className="shape-category" >
          {title}
      </label>
      <div className="category-container"> 
        {children}
      </div>
    </div>
  )
}