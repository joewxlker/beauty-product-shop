import { useCallback, useState } from "react";
import './ShopItemsComponents/ShopItems.css'

const Item = ({ quantity, amount, currency, onSubmit, alt, src, type, submit, action, method, click, quantityClick, updateCartItems, id}) => {
    
    const handleClick = useCallback((props) => {
        quantityClick(quantity,props)
    })
    

    return (
        <div className="sr-main">
            <section className="container">
                <div>
                    <h1>{id}</h1>
                    <h4>{currency}</h4>
                    <div className="pasha-image">
                        <img
                            alt={alt}
                            src={src}
                        />
                    </div>
                </div>
                <form
                >
                    <p className="sr-legal-text">{`$${amount}`}</p>
                </form>
            </section>
        </div>
    );
}

export default Item;