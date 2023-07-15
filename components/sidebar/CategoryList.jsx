import "../../styles/NavBar.css"
import Link from "next/link"

export default function CategoryList ({ categories }) {
  return (
    <div>
      <h3>Categorías</h3>
      <ul>
        {categories.map((element, index) => {
          return  <li key={index}>
                    <Link href={element.id}>{element.name}</Link>
                  </li>
        })
        }
      </ul>
    </div>
  )
}