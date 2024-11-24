import image from '../assets/eric-muhr.png'
import '../style/banner.css'

function banner() {
  return (
    <div className="banner">
      <img src={image} className="banner-img" alt="background assombrir" />
      <div className="overlay"></div>
      <h1 className="text-image">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default banner
