import "styles/ProfileSection.scss"
import ProfileImage from "components/profile/ProfileImage"
import Tags from "components/profile/Tags"
import Description from "components/profile/Description"
import SocialMedia from "components/profile/SocialMedia"
import logo from "../public/images/logo.jpg"

export default function ProfileComponent ({ name, description, category, social }) {
  return (
    <section className="profile-section">
      <ProfileImage image={logo.src} alt={`Logo de ${name}`} />
      <div className="container-info glass">
        <h1>{name}</h1>
        <h4>{category}</h4>
        <Tags date='Lunes - Viernes' hour='9:00 AM - 4:30 PM' address='Máximo Gómez 565 e/ Flor Crombet y Aguilera' />
        <Description description={description} /> 
        <SocialMedia social={social}/>
      </div>
    </section>
  )
}