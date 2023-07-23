import '../../styles/Main.css'
import '../../styles/ProfileSection.css'
import ProfileComponent from '../../components/ProfileComponent'
import Category from '../../components/Category'
import Item from '../../components/Item'
import ItemSpent from '../../components/ItemSpent'
import ItemOffer from '../../components/ItemOffer'
import fileJSON from '../../data-menu.json'

export default function Menu ({ params }) {
  const { menu } = params
  const Config = fileJSON[menu]
  const categories = Config.category
  const { name, category, description, social } = Config.info
  
  return (
    <div>
      <ProfileComponent name={name} description={description} category={category} social={social} />
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