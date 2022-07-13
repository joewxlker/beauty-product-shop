import './HeaderDropDown.css'
import HandleLogin from '../../../UserAuth/Login/HandleLogin'
import Userlogo from '../../../Images/femaleuser.svg'
import { useCallback, useEffect } from 'react'
import Cart from '../../../Stripe/CartComponents/Cart'


const DropDownButtonMobile = ({bool, onToggle, quantity, amount, currency, onSubmit, type, click, handleQuantities, cartItems,id,  updatedCartItems, removeCartItem }) => {

    const handleChange = useCallback((type, value) => {
        onToggle(type, value)
        console.log(cartItems)
    })

    return (
        <>
            {!bool['sidebar'] ?
                (
                    <button className='header-dropdown-button' onClick={e => { e.preventDefault(); handleChange('sidebar', true) }}>
                        <span className='header-dropdown-span'>
                            <img className='header-dropdown-svg' src={Userlogo} alt='userlogo' />
                        </span>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container-mobile'>
                            <div className='header-dropdown-menu-mobile'>
                            <button className='header-dropdown-button-open-mobile' onClick={e => { e.preventDefault(); handleChange('sidebar', false) }}> X </button>
                                <HandleLogin />
                                <Cart
                                    bool={bool}
                                    onToggle={onToggle}
                                    quantity={quantity}
                                    formatPrice={amount}
                                    amount={amount}
                                    currency={currency}
                                    type={type}
                                    click={click}
                                    handleQuantities={handleQuantities}
                                    cartItems={cartItems}
                                    updatedCartItems={updatedCartItems}
                                    removeCartItem={removeCartItem}
                                    onSubmit={onSubmit}
                                    id={id}
                                />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}


export default DropDownButtonMobile;