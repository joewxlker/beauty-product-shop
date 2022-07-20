import { useEffect } from "react";
import { useLocation } from "react-router";
import ShopItems from "../../Stripe/ShopItemsComponents/ShopItems";
import Header from "../HeaderComponents/Header";
import Footer from '../FooterComponents/Footer'
import '../HeaderComponents/HeaderBig.css'

const ProductsOne = ({ updateCartItems, items, cartItems, data }) => {
    
    const location = useLocation();
    console.log(cartItems)
    useEffect(() => { 
        setTimeout(() => {
            console.log(location)            
        }, 1000);
    }, [])

        
    return (
        <>
            <ShopItems
                items={items}
                data={data}
                updateCartItems={updateCartItems} />
        </>
    );
}

export default ProductsOne;