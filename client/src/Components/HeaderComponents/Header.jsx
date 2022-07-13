import './Header.css'
import {NavLinks} from './NavLinks/NavLinks'
import MainLogo from '../../Images/main-logo.svg'
import MobileDropDown from './NavLinks/DropDown.jsx'
import DropDownButton from './MainDropDown/MobileHeaderDD.jsx'
import { Link } from 'react-router-dom'
import DropDownButtonMobile from './MainDropDown/MobileHeaderDD.jsx'

const Header = ({ bool, onToggle, quantity, amount, currency, onSubmit, alt, src, type, id, submit, action, method, click, handleQuantities, cartItems, updateCartItems, removeCartItem, mobile }) => {
    console.log(cartItems.length)
    if (!mobile) {return (
        <>
            <header className={'header-container'} >
                <Link className='header-link' to='/' ><h1 >KLEANSE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <NavLinks />
                <DropDownButton
                    bool={bool}
                    onToggle={onToggle}
                    quantity={quantity}
                    formatPrice={amount}
                    amount={amount}
                    currency={currency}
                    type={type}
                    click={click}
                    handleQuantities={handleQuantities}
                    onSubmit={onSubmit}
                    action={action}
                    method={method}
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}
                    id={id}
                />
                {cartItems.length > 0 && <div className='cart-notifier'></div>}
            </header>
        </>
    )
    } else {
        return (
            <header className={'header-container'} >
                <Link className='header-link' to='/' ><h1 >KLEANSE</h1></Link>
                <image className='header-logo' src={MainLogo} />
                <MobileDropDown />
                <DropDownButtonMobile
                    bool={bool}
                    onToggle={onToggle}
                    quantity={quantity}
                    formatPrice={amount}
                    amount={amount}
                    currency={currency}
                    type={type}
                    click={click}
                    handleQuantities={handleQuantities}
                    onSubmit={onSubmit}
                    action={action}
                    method={method}
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}
                    id={id}
                />
                {cartItems.length > 0 && <div className='cart-notifier'></div>}
            </header>
        )
    }
}

export default Header;