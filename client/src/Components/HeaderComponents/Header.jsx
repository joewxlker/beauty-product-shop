import './Header.css'
import {NavLinks} from './NavLinks/NavLinks'
import MainLogo from '../../Images/main-logo.svg'
import DropDownButton from './MainDropDown/HeaderDD.jsx'
import { Link } from 'react-router-dom'
import DropDownButtonMobile from './MainDropDown/MobileHeaderDD.jsx'
import { useEffect } from 'react'

const Header = ({ bool, onToggle, items, mobile, handleQuantityChange, onRemoveItem, cartItems, data }) => {
    
    if (!mobile) {return (
        <>
            <header className={'header-container'} >
                <Link className='header-link' to='/' ><h1 >KLEANSE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <NavLinks />
                <DropDownButton
                    bool={bool}
                    mobile={mobile}
                    onToggle={onToggle}
                    items={items}
                    data={data}
                    cartItems={cartItems}
                    handleQuantityChange={handleQuantityChange}
                    onRemoveItem={onRemoveItem}
                />
                {data.length > 0 && <div className='cart-notifier'></div>}
            </header>
        </>
    )
    } else {
        return (
            <header className={'header-container'} >
                <Link className='header-link' to='/' ><h1 >KLEANSE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <DropDownButtonMobile
                    bool={bool}
                    mobile={mobile}
                    onToggle={onToggle}
                    items={items}
                    cartItems={cartItems}
                    data={data}
                    handleQuantityChange={handleQuantityChange}
                    onRemoveItem={onRemoveItem}
                />
                {data.length > 0 && <div className='cart-notifier'></div>}
            </header>
        )
    }
}

export default Header;