import Config from "../../../data-menu.json"
import Item from "../../../components/Item"
import ItemOffer from "../../../components/ItemOffer"
import ItemSpent from "../../../components/ItemSpent"

export default function PageCategory ({ params }) {

  const { category } = params 

  return (
    <section className="category-container">
      {Config[category].map((element) => {
        if (element.available){                      
          if (element.offer) {
            return  <ItemOffer
                      id={element.id}
                      title={element.title}
                      description={element.description}
                      image={element.image}
                      price={element.price}
                      coin={element.coin}
                      offer={element.offer}
                      key={element.id}/>
          }
          return  <Item
                    id={element.id}
                    title={element.title}
                    description={element.description}
                    image={element.image}
                    price={element.price}
                    coin={element.coin}
                    key={element.id}/>
        }

        return  <ItemSpent
                  id={element.id}
                  title={element.title}
                  description={element.description}
                  image={element.image}
                  key={element.id}/>
      })}
    </section>
  )
}