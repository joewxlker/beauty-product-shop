import './HeaderDropDown.css'
import HandleLogin from '../../../UserAuth/Login/HandleLogin'
import Userlogo from '../../../Images/femaleuser.svg'
import { useCallback, useEffect } from 'react'
import Cart from '../../../Stripe/CartComponents/Cart'


const DropDownButtonMobile = ({bool, onToggle, items, handleQuantityChange, cartItems, removeCartItem, amount, data }) => {

    const handleChange = useCallback((type, value) => {
        onToggle(type, value)
    })

    return (
        <>
            {!bool['sidebar'] ?
                (
                    <button className='header-dropdown-button' onClick={e => { e.preventDefault(); handleChange('sidebar', true) }}>
                        <i class="fak fa-bags-shopping-thin"></i>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container-mobile'>
                            <div className='header-dropdown-menu-mobile'>
                            <button className='header-dropdown-button-open-mobile' onClick={e => { e.preventDefault(); handleChange('sidebar', false) }}> X </button>
                                <HandleLogin />
                                {data.length < 1 && <h3>Oh dear, your cart is empty..</h3>}
                                {data.length > 0 &&
                                    <Cart
                                    bool={bool}
                                    onToggle={onToggle}
                                    amount={amount}
                                    items={items}
                                    data={data}
                                    handleQuantityChange={handleQuantityChange}
                                    removeCartItem={removeCartItem}
                                />}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}


export default DropDownButtonMobile;