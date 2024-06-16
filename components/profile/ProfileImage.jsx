import 'styles/ProfileSection.scss'
import Image from 'next/image'

export default function ProfileImage ({ image, alt }) {
  return (
    <div className='container-img'>
      <Image src={image} alt={alt} className='profile-img' priority={true} fill={true} />
    </div>
  )
}