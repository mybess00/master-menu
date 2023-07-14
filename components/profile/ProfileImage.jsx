import '../../styles/ProfileSection.css'

export default function ProfileImage ({ image, alt }) {
  return (
    <div className='container-img'>
      <img src={image} alt={alt} className='profile-img'/>
    </div>
  )
}