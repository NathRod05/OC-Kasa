import logo from '../assets/logo-header.png'
import '../style/header.css'

function header() {
    return (
        <div className='header'>
            <img src={logo} className='' alt='logo header'/>
            <nav className='nav-bar'>
            <a href='#' className='link'> Accueil</a>
            <a href='#' className='link'> A Propos</a>
            </nav>
        </div>
    )
}

export default header;