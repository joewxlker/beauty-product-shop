import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getLocalData, setLocalData } from '../../Services/handleLocalData';
import CartItems from './CartItems';

const Cart = ({ cartItems, quantity, onRemoveItem, data, handleQuantityChange }) => {

    // const [total, setTotal] = useState();

    // useEffect(() => {
    //     console.log(cartItems)
    //     let sum = 0;
    //     for (let v in cartItems) {
    //         sum = sum + cartItems[v].unit_amount;
    //     }
    //     setTotal(sum)
    // }, [setTotal])
    
    return (
        <>
            {cartItems.map(({id, unit_amount, images, amount }) => {
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
                            />
                        </div>
                    </>
                )
            })}
            {/* <p>Total: {total}</p> */}
            {cartItems.length !== undefined &&
                <Link to='/checkout'>
                    <button >checkout</button>
                </Link>}
                        
        </>

    )
}
export default Cart;