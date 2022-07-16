import { useCallback, useEffect, useState } from "react"
import { getLocalData, setLocalData } from "../../Services/handleLocalData";
import './ShoppingCart.css'

const CartItems = ({ cartItems, id, onRemoveItem, images, data, quantity, handleQuantityChange }) => {

    const [amount, setAmount] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setAmount(amounts())
    }, [])

    const onQuanitityChanged = useCallback(() => {
        if(id === undefined) return
        handleQuantityChange(amount[id], id);
    })

    const amounts = (prev) => { return { ...prev, [id]: count } }

    const addQuantity = () => {
        setCount(amount[id])
        setCount(count + 1)    
        setAmount(amounts())
        onQuanitityChanged();
    }
    const subtractQuantity = () => {
        setCount(amount[id])
        setCount(count - 1)    
        setAmount(amounts())
        onQuanitityChanged();
    }

    const removeItem = useCallback((id) => {
        onRemoveItem(id);
    })

    return (
        <>
            <div className='cart-main-container'>
                <div className='cart-item-id'>
                    <h6 className='cart-item-title'>{}</h6>
                    <img className="item-image" src={images} />
                </div>
                <form>
                    <div className="cart-button-container">
                        <button
                            className="increment-btn"
                            disabled={count === 1}
                            onClick={subtractQuantity}
                            type="button"
                        >
                            -
                        </button>
                        <h5>{amount[id]}</h5>
                        <button
                            className="increment-btn"
                            disabled={count === 10}
                            onClick={addQuantity}
                            type="button"
                        >
                            +
                        </button>
                        <button
                            className="increment-btn"
                            onClick={e => {e.preventDefault(); removeItem(id)}}
                            type="button"
                        >
                            X
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CartItems;