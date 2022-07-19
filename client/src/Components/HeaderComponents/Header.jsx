import './HeaderBig.css'
import {NavLinks} from './NavLinks/NavLinks'
import MainLogo from '../../Images/main-logo.svg'
import DropDownButton from './MainDropDown/HeaderDD.jsx'
import { Link } from 'react-router-dom'
import DropDownButtonMobile from './MainDropDown/MobileHeaderDD.jsx'
import { useEffect, useState } from 'react'

const Header = ({ bool, onToggle, items, mobile, handleQuantityChange, onRemoveItem, cartItems, data }) => {
    
    const [scroll, setScroll] = useState(true);
    const types = [
        { name: <div style={{ padding: '1rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Home</div>, link: '/', id: 'dark' ,display: 'none'},
        { name: 'Products', link: '/products/all', id: 'dark' },
        { name: <h1 style={{ padding: '2rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Kleanse</h1>, link : '/', id: 'dark',display: 'none' },
        { name: 'Checkout', link: '/checkout', id: 'dark', display: 'none' },
        { name: <div style={{ padding: '1rem'}}>About</div>, link: '/',id: 'dark', display: 'none'}
    ] 
    const typesDark = [
        { name: <div style={{ padding: '1rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Home</div>, link: '/', id: 'light', display: 'none'},
        { name: 'Products', link: '/products/all', id: 'light' },
        { name: <h1 style={{ padding: '2rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Kleanse</h1>, link : '/', id: 'light', display: 'none' },
        { name: 'Checkout', link: '/checkout', id: 'light', display: 'none' },
        { name: <div style={{ padding: '1rem'}}>About</div>, link: '/',id: 'light', display: 'none' }
    ] 
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
    
    if (!mobile) {
        return (
            <>
                <header className={`header-container-${scroll}`} >
                    <span className='header-contact-info'>
                        <span className=''><p>+61 0333643418</p><i class="fak fa-phone-office-thin-1-"></i></span>
                        <span><p>kleanseaustralia@kleansebeuty.co.au</p></span>
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