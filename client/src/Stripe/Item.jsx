
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { setLocalData } from "../Services/handleLocalData";
import './items.css'
import './ShopItemsComponents/ShopItems.css'

const Item = ({ items, data, updateCartItems }) => {
    
    useEffect(() => {
        if (items === undefined) {
            console.log(loading, items)
           return setLoading(true)
        }
        setLoading(false)
        console.log(loading, items)
    }, [items])
    const [loading, setLoading] = useState(true);
    const handleCartUpdate = useCallback((item) => {
        updateCartItems(item);
        console.log(items)
      })

    return (
    <>
            {!loading &&
                <div className="sr-main">
                    {items.map(({ id, images, description, active, unit_amount, product, name, currency }) => {
                        if (!active) {
                            return (
                                <section key={id} className="main-shopitem-container">
                                    <h1> {name} </h1>
                                    <div className='main-shopitem-text-container'>
                                        <div className="image">
                                            <img alt={images} src={images} className='product-image' />
                                        </div>
                                        <div className='description-container'>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <form className='main-logic-container'>
                                        <p className="sr-legal-text" >{unit_amount}</p>
                                        <button onClick={e => { e.preventDefault(); handleCartUpdate({ id: product, amount: 1, unit_amount: unit_amount, images: images, currency: currency }) }}>add to cart</button>
                                    </form>
                                </section>
                            )
                        }
                        return (
                            <>
                                <section className="main-shopitem-container">
                                <h1>{name}</h1>
                                    <div className='main-shopitem-text-container'>
                                        
                                        <div className="image">
                                            <img alt={images} src={images} className='product-image' />
                                        </div>
                                        <div className='description-container'>
                                            <p>{description}</p>
                                        </div>
                                        <form className='main-logic-container'>
                                        <p className="sr-legal-text">{`$${unit_amount/100}`}</p>
                                        <button onClick={e => { e.preventDefault(); handleCartUpdate({ id: product, amount: 1, unit_amount: unit_amount, images: images, name: name, currency: currency }) }}>add to cart</button>
                                    </form>
                                    </div>

                                </section>
                            </>
                        )
                    })}
           
                </div>
            }
            </>
    );
}

export default Item;