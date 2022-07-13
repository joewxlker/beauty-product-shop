import './ShopItems.css'
import Item from '../Item';
import { useCallback } from 'react';

const ShopItems = ({ quantity, amount, currency, click, quantityClick, id, cartItems, updateCartItems}) => {

    const handleCartUpdate = useCallback(() => {
        for (let v in cartItems) {
            if(cartItems[v] === id) return
        }
        updateCartItems(id)
    })

    return (
        <>
            <h1>SHOP ALL ITEMS</h1>
            <Item
                cartItems={cartItems}
                updateCartItems={updateCartItems}
                quantity={quantity}
                formatPrice={amount}
                amount={amount}
                currency={currency}
                type={'main'}
                click={click}
                quantityClick={quantityClick} 
                id={id} />
            <button onClick={handleCartUpdate}>add to cart</button>
        </>
    );
}

export default ShopItems;