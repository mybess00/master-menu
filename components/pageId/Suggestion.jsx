'use client'

import { useParams } from 'next/navigation'
import filseJSON from '../../data-menu.json'
import VerticalDivider from "../VerticalDivider"
import ItemShort from './ItemShort'

export default function Suggestion () {

  const { menu, category, id } = useParams()
  const Config = filseJSON[menu]
  const randomNumber = (max) => Math.floor(Math.random() * max)
  const categoryMax = Config["category"].length
  
  const getItem = () => {
    const randomCategory = Config["category"][randomNumber(categoryMax)]
    const randomCategoryMax = Config[randomCategory.id].length
    const randomItem = Config[randomCategory.id][randomNumber(randomCategoryMax)]

    return {
      code: <ItemShort key={randomItem.id} title={randomItem.title} price={randomItem.price} coin={randomItem.coin} image={randomItem.image} link={`/${menu}/${randomCategory.id}/${randomItem.id}`}/>,
      id: randomItem.id
    }
  }

  const isSameId = (item, arrItem) => {
    if (item.id == id || arrItem.filter((element) => element.id == item.id).length !== 0) {
      return true
    }
    return false
  }

  const getRandomItems = (max) => {
    const randomItems = []
    for (let i = 0; i < max; i++) {
      let item = getItem()
      while(isSameId(item, randomItems)){
        item = getItem()
      }
      randomItems.push(item)
    }
    return randomItems
  }

  return (
    <div className='main-container-suggestion'>
      <div className='title-suggestion'>
        <VerticalDivider color={"green"} width={2}/>
        Productos Relacionados
      </div>
      <div className='container-items-suggestion'>
        {
          getRandomItems(4).map(item => item.code)
        }
      </div>
    </div>
  )
}