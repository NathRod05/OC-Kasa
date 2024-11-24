import logo from '../assets/logo-header.png'
import '../style/header.css'
import '../style/style.css'

function header() {
  return (
    <div className="header page">
      <img src={logo} className="logo" alt="logo header" />
      <nav className="nav-bar">
        <a href="/" className="link">
          Accueil
        </a>
        <a href="/about" className="link">
          A Propos
        </a>
      </nav>
    </div>
  )
}

export default header
