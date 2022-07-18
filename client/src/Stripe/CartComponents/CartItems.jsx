import { useCallback, useEffect, useState } from "react"
import { getLocalData, setLocalData } from "../../Services/handleLocalData";
import './ShoppingCart.css'

const CartItems = ({ id, onRemoveItem, images, handleQuantityChange, quantity }) => {

    const [quantities, setQuantity] = useState(quantity);
    const [count, setCount] = useState(1);

    useEffect(() => { 
    },[quantities, count, setQuantity, setCount])
    const onQuanitityChanged = useCallback(() => {
        handleQuantityChange(quantities, id);
    })
    const addQuantity = () => {
        setQuantity(quantities + 1)
        setTimeout(() => { 
            onQuanitityChanged()  
        }, 100)
    }
    const subtractQuantity = () => {
        setQuantity(quantities - 1)
        setTimeout(() => { 
            onQuanitityChanged()
        }, 100)
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
                            disabled={quantity <= 1}
                            onClick={subtractQuantity}
                            type="button"
                        >
                            -
                        </button>
                        <h5>{quantity}</h5>
                        <button
                            className="increment-btn"
                            disabled={quantity >= 10}
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