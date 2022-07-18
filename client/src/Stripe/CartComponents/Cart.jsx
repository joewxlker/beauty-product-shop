import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getLocalData, setLocalData } from '../../Services/handleLocalData';
import CartItems from './CartItems';

const Cart = ({ cartItems, onRemoveItem, data, handleQuantityChange }) => {

    
    return (
        <>
            {cartItems.map(({id, unit_amount, images, amount, name }) => {
                return (
                    <>
                        <div className='cart-container'>
                            <CartItems
                                quantity={amount}
                                handleQuantityChange={handleQuantityChange}
                                onRemoveItem={onRemoveItem}
                                cartItems={cartItems}
                                data={data}
                                id={id}
                                amount={unit_amount}
                                images={images}
                                name={name}
                            />
                        </div>
                    </>
                )
            })}
            {/* <p>Total: {total}</p> */}
            {cartItems.length > 0 &&
                <Link to='/checkout'>
                    <button >checkout</button>
                </Link>}
                        
        </>

    )
}
export default Cart;