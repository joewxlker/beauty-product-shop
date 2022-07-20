import './HeaderBig.css'
import {NavLinks} from './NavLinks/NavLinks'
import MainLogo from '../../Images/main-logo.svg'
import DropDownButton from './MainDropDown/HeaderDD.jsx'
import { Link } from 'react-router-dom'
import DropDownButtonMobile from './MainDropDown/MobileHeaderDD.jsx'
import { useEffect, useState } from 'react'
import {typesDark, types} from './navlinkobj'

const Header = ({ bool, onToggle, items, mobile, handleQuantityChange, onRemoveItem, cartItems, data }) => {
    
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        console.log(scroll)
        const handleScroll = event => {
            if (mobile) return;
            if (window.scrollY >= 204) {
                setScroll(false)
            }
            else {setScroll(true)}
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [mobile, setScroll]);
    
    if(cartItems=== undefined) return
    if (!mobile) {
        return (
            <>
                <header className={`header-container-${scroll}`} >
                    <span className='header-contact-info'>
                        <span className=''><p>+61 0333643418</p><i class="fak fa-phone-office-thin-1-"></i></span>
                        <span><p>kleanseaustralia@kleansebeauty.co.au</p></span>
                    </span>
                    {scroll &&
                    <ul className='nav-container'>
                        {typesDark.map((data) => { return (
                            <NavLinks props={data} />
                            )})}
                    </ul>
                    }
                    {!scroll &&                     <ul className='nav-container'>
                        {types.map((data) => { return (
                            <NavLinks props={data} />
                            )})}
                    </ul>}
                    <image className='header-logo' src={MainLogo} />
                    <span className='header-button-container'>
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
                    </span>
                    {cartItems.length > 0 && <div className='cart-notifier'></div>}
                </header>

            </>
        )
    } else {
        return (
            <header className={`header-container-true`} >
                <Link className='header-link' to='/' ><h1 >KLEANSE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <DropDownButtonMobile
                    bool={bool}
                    mobile={mobile}
                    onToggle={onToggle}
                    items={items}
                    data={data}
                    cartItems={cartItems}
                    handleQuantityChange={handleQuantityChange}
                    onRemoveItem={onRemoveItem}
                />
                {cartItems.length > 0 && <div className='cart-notifier'></div>}
            </header>
        )
    }
}

export default Header;