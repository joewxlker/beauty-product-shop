import { useCallback } from "react"
import './ShoppingCart.css'

const CartItems = ({ quantity, amount, currency, onSubmit, alt, src, submit, handleQuantities, items, id, removeCartItem, cartItems }) => {
    
        const handleSubmit = useCallback(() => {
            submit(items)
        })
    
    const handleQuantity = useCallback((e) => {
        handleQuantities(e)
    })
    
    const handleCartUpdate = useCallback(() => {
        console.log(id)
        removeCartItem(id)
        // e is an identifier that indicates the array value to remove
    })
    
    if(cartItems === undefined) return
    return (
        <>
            {cartItems.map((cart) => {
                return (
                    <>
            <div className='cart-item-id'>
                <h4>{cart.slice(0, 2)}</h4>
                <div className="item-image">
                    <img alt={alt} src={src} />
                </div>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="cart-button-container">
                    <button
                        className="increment-btn"
                        disabled={quantity === 1}
                        onClick={e => { e.preventDefault(); handleQuantity(false) }}
                        type="button"
                    >
                        -
                    </button>
                    <h5>{quantity}</h5>
                    <button
                        className="increment-btn"
                        disabled={quantity === 10}
                        onClick={e => { e.preventDefault(); handleQuantity(true) }}
                        type="button"
                    >
                        +
                    </button>
                    <button
                        className="increment-btn"
                        onClick={handleCartUpdate}
                        type="button"
                    >
                        X
                    </button>
                </div>
            </form>
                </>
            )
                })}
        </>
    )
}

export default CartItems;