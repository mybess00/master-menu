import "../../styles/ProfileSection.css"
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs'

const reference = {
  "telegram": <BsTelegram/>,
  "facebook": <BsFacebook/>,
  "instagram": <BsInstagram/>,
  "whatsapp": <BsWhatsapp/>,
}

export default function SocialMedia ({ social }) {
  const socialList = Object.entries(social)
  return (
    <div className='social-container'>
      {socialList.map((element, index) => {
        return  <Link className={element[0]} href={element[1]} target='blank' key={index}>
                  {reference[element[0]]}
                </Link>
      })}
    </div>
  )
}