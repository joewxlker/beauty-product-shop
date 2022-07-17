import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return ( 
        <div className='footer-main'>
            <div className='footer-text-container'>
            <h2 className='footer-h2'>KLEANSE</h2>
            <p className='footer-p'>copyright, fabrice industries limited...</p>
            </div>
            <div className='footer-links-container'>
                <a className='footer-svg-link' href=''><i className='footer-svg' class="fak fa-facebook-f-brands"></i></a>
                <a className='footer-svg-link' href=''><i className='footer-svg' class="fak fa-twitter-brands"></i></a>
                <a className='footer-svg-link' href=''><i className='footer-svg' class="fak fa-instagram-brands"></i></a>
            </div>
            <div className='additional-links'>
                <Link to='/' className='text-link'>about</Link>
                <Link to='/' className='text-link'>privacy policy</Link>
                <Link to='/' className='text-link'>careers</Link>
                <Link to='/' className='text-link'>shipping</Link>
                <Link to='/' className='text-link'>shipping</Link>
            </div>
        </div>
     );
}

export default Footer;