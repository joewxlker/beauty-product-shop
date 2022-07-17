import { Link } from 'react-router-dom';
import '../Header.css'
import './NavLinks.css'
// import { Link } from 'react-router-dom'

export const NavLinks = () => {
    return (
        <>
                {/* <Link to='/'>HOME</Link> */}
                <Link to ='/' className='nav-links'>Products</Link>
                <Link to='/Checkout' className='nav-links'>Checkout</Link>
                <Link to='/' className='nav-links'>Contact</Link>
        </>
      );
}

