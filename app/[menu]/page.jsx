'use client'

import '../../styles/Main.css'
import '../../styles/ProfileSection.css'
import { useScrollListener } from '../../hooks/useSrollListener'
import ProfileComponent from '../../components/ProfileComponent'
import Category from '../../components/Category'
import Item from '../../components/Item'
import ItemSpent from '../../components/ItemSpent'
import ItemOffer from '../../components/ItemOffer'
import { useEffect, useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

export default function Menu () {
  const { ConfigData } = useContext(MenuContext)
  const categories = ConfigData.category
  const { name, category, description, social } = ConfigData.info

  const isVisibleProfile = useScrollListener('.profile-section')

  useEffect(() => {
    const mainBar = document.querySelector('.main-bar')
    if (!isVisibleProfile) {
      mainBar.style.transform = 'none'
    } else {
      mainBar.style.transform = 'translateY(-105%)'
    }
  }, [isVisibleProfile])

  return (
    <div>
      <ProfileComponent name={name} description={description} category={category} social={social} />
          <section>
            {categories.map((element) => {
                return  <Category title={element.name} id={element.id} key={element.id} menu={ConfigData.id}>
                          {ConfigData[element.id].map((item) => {
                            if (item.available){                      
                              if (item.offer) {
                                return  <ItemOffer
                                          item={item}
                                          baseLink={`/${ConfigData.id}/${element.id}/`}
                                          category={element.id}
                                          key={item.id}/>
                              }
                              return  <Item
                                        item={item}
                                        baseLink={`/${ConfigData.id}/${element.id}/`}
                                        category={element.id}
                                        key={item.id}/>
                            }
                            return  <ItemSpent
                                      item={item}
                                      key={item.id}/>
                          })}
                        </Category>
            })}
          </section>
    </div>
  )
}