import './HeaderDropDown.css'
import HandleLogin from '../../../UserAuth/Login/HandleLogin'
import Userlogo from '../../../Images/femaleuser.svg'
import { useCallback } from 'react'
import Cart from '../../../Stripe/CartComponents/Cart'
import { useEffect } from 'react'


const DropDownButton = ({bool, onToggle, items, handleQuantityChange, onRemoveItem, amount, data, cartItems }) => {

    const handleChange = useCallback((type, value) => {
        onToggle(type, value)
    })
    return (
        <>
            {!bool['sidebar'] ?
                (
                    <button className='header-dropdown-button' onClick={e => { e.preventDefault(); handleChange('sidebar', true) }}>
                        <span className='header-dropdown-span'>
                        <i class="fak fa-bags-shopping-thin"></i>
                        </span>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container'>
                            <button className='header-dropdown-button-open' onClick={e => { e.preventDefault(); handleChange('sidebar', false) }}> X </button>
                            <div className='header-dropdown-menu'>
                                <HandleLogin />
                                {cartItems.length <= 0 && <h3>Oh dear, your cart is empty..</h3>}
                                    <Cart
                                    bool={bool}
                                    onToggle={onToggle}
                                    amount={amount}
                                    items={items}
                                    cartItems={cartItems}
                                    data={data}
                                    handleQuantityChange={handleQuantityChange}
                                    onRemoveItem={onRemoveItem}
                                />
                                
                               
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}


export default DropDownButton;
