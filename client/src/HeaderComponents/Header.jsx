import './Header.css'
import {NavLinks} from './NavLinks/NavLinks'
import MainLogo from '../Images/main-logo.svg'
import MobileDropDown from './NavLinks/DropDown.jsx'
import DropDownButton from './MainDropDown/HeaderDropDown.jsx'
import { Link } from 'react-router-dom'

const Header = ({ bool, onToggle }) => {
    return (
        <>
            <header className={'header-container'}>
                <Link className='header-link' to ='/' ><h1 >FABRICE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <NavLinks />
                <MobileDropDown />
                <DropDownButton bool={bool} onToggle={onToggle} />
            </header>
        </>
    );
}

export default Header;