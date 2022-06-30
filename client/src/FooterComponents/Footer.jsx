import './Footer.css'

const Footer = () => {
    return ( 
        <div className='footer-main'>
            <div className='footer-text-container'>
            <h2 className='footer-h2'>KWIGIZE</h2>
            <p className='footer-p'>copyright, fabrice industries limited...</p>
            </div>
            <div className='footer-links-container'>
                <a className='footer-svg-link' href=''><img className='footer-svg' alt='twitter' /></a>
                <a className='footer-svg-link' href=''><img className='footer-svg' alt='facebook' /></a>
                <a className='footer-svg-link' href=''><img className='footer-svg' alt='instagram' /></a>
            </div>
        </div>
     );
}

export default Footer;