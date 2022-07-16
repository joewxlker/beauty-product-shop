import '../Header.css'
import './NavLinks.css'
// import { Link } from 'react-router-dom'

export const NavLinks = () => {
    return (
        <>
            <nav className='desktop-header-links'>
                {/* <Link to='/'>HOME</Link> */}
                <h4 className='nav-links'>Products</h4>
                <h4 className='nav-links'>checkout</h4>
                <h4 className='nav-links'>Contact</h4>
            </nav>

        </>
      );
}

