import '../../styles/Main.css'
import '../../styles/ProfileSection.css'
import ProfileImage from "../../components/profile/ProfileImage"
import Tags from '../../components/profile/Tags'
import Description from '../../components/profile/Description'
import Category from '../../components/Category'
import Item from '../../components/Item'
import ItemSpent from '../../components/ItemSpent'
import ItemOffer from '../../components/ItemOffer'
import fileJSON from '../../data-menu.json'

import logo from "../../public/images/logo.jpg"

export default function Menu ({ params }) {
  const { menu } = params
  const Config = fileJSON[menu]
  const categories = Config.category
  const { name, category, description } = Config.info
  
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
              return  <Category title={element.name} id={element.id} key={element.id} menu={menu}>
                        {Config[element.id].map((item) => {
                          if (item.available){                      
                            if (item.offer) {
                              return  <ItemOffer
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                        coin={item.coin}
                                        offer={item.offer}
                                        baseLink={`/${menu}/${element.id}/`}
                                        asBaseLink={`/${menu}/${element.id}/`}
                                        key={item.id}/>
                            }
                            return  <Item
                                      id={item.id}
                                      title={item.title}
                                      description={item.description}
                                      image={item.image}
                                      price={item.price}
                                      coin={item.coin}
                                      baseLink={`/${menu}/${element.id}/`}
                                      asBaseLink={`/${menu}/${element.id}/`}
                                      key={item.id}/>
                          }

                          return  <ItemSpent
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    key={item.id}/>
                        })}
                      </Category>
          })}
        </section>
    </div>
  )
}