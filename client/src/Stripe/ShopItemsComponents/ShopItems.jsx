import './ShopItems.css'
import Item from '../Item';
import { useCallback } from 'react';

const ShopItems = ({ cartItems, updateCartItems, items, data }) => {
    
    return (
        <>
            <h1>SHOP ALL ITEMS</h1>
            <Item
                items={items}
                data={data}
                updateCartItems={updateCartItems}
                cartItems={cartItems} />
        </>
    );
}

export default ShopItems;