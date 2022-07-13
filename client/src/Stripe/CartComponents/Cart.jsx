import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const Cart = ({ quantity, formatPrice, amount, currency, handleQuantities, cartItems, removeCartItem, id }) => {
    
    return (
        <>
            {cartItems.map((cart) => {
                return (
                    <>
                        <div className='cart-container'>
                            <CartItems
                                quantity={quantity}
                                formatPrice={formatPrice}
                                amount={amount}
                                currency={currency}
                                handleQuantities={handleQuantities}
                                removeCartItem={removeCartItem}
                                cartItems={cartItems}
                                id={id}
                            />
                        </div>
                    </>
                )
            })}
            <p>Total: </p>
            <Link to='/Checkout'><button>checkout</button></Link>
                        
        </>

    )
}
export default Cart;