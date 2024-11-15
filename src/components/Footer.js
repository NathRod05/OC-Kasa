import '../style/footer.css'
import logo from '../assets/logo-footer.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} className='logo-footer' alt="logo footer" />
            <p className='text-footer'> © 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;