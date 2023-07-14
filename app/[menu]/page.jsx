import '../../styles/Main.css'
import '../../styles/ProfileSection.css'
import ProfileImage from "../../components/profile/ProfileImage"
import Tags from '../../components/profile/Tags'
import Description from '../../components/profile/Description'
import Category from '../../components/Category'
import Item from '../../components/Item'
import ItemSpent from '../../components/ItemSpent'
import ItemOffer from '../../components/ItemOffer'
import Config from '../../data-menu.json'

import logo from "../../public/images/logo.jpg"

export default function Menu ({ params }) {
  const { menu } = params

  const categories = Config.category

  const name = 'Fast Bites'
  const category = 'Restaurante y Comida Rápida'
  const description = 'Deliciosos sabores en tu puerta. FastBites: comida rápida a domicilio con los mejores ingredientes y atención excepcional'
    
  return (
    <div>
      <ProfileImage image={logo.src} alt={`Logo de ${name}`} />
        <div className="container-info glass">
          <h1>{name}</h1>
          <h4>{category}</h4>
          <Tags date='Lunes - Viernes' hour='9:00 AM - 4:30 PM' address='Máximo Gómez 565 e/ Flor Crombet y Aguilera' />
          <Description description={description} />
        </div>
        <section>
          {categories.map((element) => {
            const aa = Object.getOwnPropertyDescriptor(Config, element.id)
              return  <Category title={element.name} id={element.id}>
                        {Config[element.id].map((element) => {
                          if (element.available){                      
                            if (element.offer) {
                              return  <ItemOffer
                                        id={element.id}
                                        title={element.title}
                                        description={element.description}
                                        image={element.image}
                                        price={element.price}
                                        coin={element.coin}
                                        offer={element.offer}/>
                            }
                            return  <Item
                                      id={element.id}
                                      title={element.title}
                                      description={element.description}
                                      image={element.image}
                                      price={element.price}
                                      coin={element.coin}/>
                          }

                          return  <ItemSpent
                                    id={element.id}
                                    title={element.title}
                                    description={element.description}
                                    image={element.image}/>
                        })}
                      </Category>
          })}
        </section>
    </div>
  )
}