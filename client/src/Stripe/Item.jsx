
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { setLocalData } from "../Services/handleLocalData";
import './items.css'
import './ShopItemsComponents/ShopItems.css'

const Item = ({ items, data, updateCartItems }) => {
    
    const handleCartUpdate = useCallback((item) => {
        updateCartItems(item);
      })

    return (
        <div className="sr-main">
            {items.map(({id, currency, images, description, active, unit_amount, name, product, custom_unit_amount }) => { 
                if (!active) {
                    return (
                        <section key={id} className="main-shopitem-container">
                        <div className='main-shopitem-text-container'>
                            <div className="image">
                                <h1 > {id} </h1>
                                <img alt={images} src={images} className='product-image' />
                            </div>
                            <div  className='description-container'>
                                <p>{description}</p>
                            </div>
                        </div>
                        <form className='main-logic-container'>
                            <p className="sr-legal-text" >{unit_amount}</p>
                                <button onClick={e => { e.preventDefault(); handleCartUpdate({ id: product, amount: '', unit_amount: unit_amount, images: images}) }}>add to cart</button>
                        </form>
                    </section>
                    )
                }
                return (
                    <>
                    <section className="main-shopitem-container">
                    <div className='main-shopitem-text-container'>
                        <div className="image">
                            <h1>{id}</h1>
                            <img alt={images} src={images} className='product-image' />
                        </div>
                        <div className='description-container'>
                            <p>{description}</p>
                        </div>
                    </div>
                    <form className='main-logic-container'>
                        <p className="sr-legal-text">{`$${unit_amount}`}</p>
                        <button onClick={e => { e.preventDefault(); handleCartUpdate({ id: product, amount: '', unit_amount: unit_amount, images: images}) }}>add to cart</button>
                    </form>
                    </section>
                    </>
                )
            })}
           
        </div>
    );
}

export default Item;