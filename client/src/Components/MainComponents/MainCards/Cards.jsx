import { useState } from 'react'
import './CardOne.css'
import './CardTwo.css'
import './CardThree.css'
import './CardFour.css'
import './MainCards.css'

export const CardOne = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            {!hover ? (
                <>
                <div id='main-card' className='background-one' onMouseEnter={e => { e.preventDefault(); setHover(true) }}>
                    <h3 className='h3-light'>About</h3>
                        <p className='p-light'>Something about whatever thiscard will be about in the future..</p>
                        </div>
                </>
            ) : (<div id='main-card-hover'className='background-hover-one' onMouseLeave={e => { e.preventDefault(); setHover(false) }}>
                <h3 className='h3-light'>About</h3>
                <h2 className='h2-light'>View Products</h2>
            </div>
    )
}
            </>
    )
}

export const CardTwo = () => {

    const [hover, setHover] = useState(false)
    return (
        <>
            {!hover ? (
                <>
                <div id='main-card' className='background-two' onMouseEnter={e => { e.preventDefault(); setHover(true) }}>

                    <h3 className='h3-light'>About</h3>
                        <p className='p-light'>Something about whatever thiscard will be about in the future..</p>
                        </div>
                </>
            ) : (<div id='main-card-hover' className='background-hover-two' onMouseLeave={e => { e.preventDefault(); setHover(false) }}>
                <h3 className='h3-light'>About</h3>
                <h2 className='h2-light'>View Products</h2>
            </div>
    )
}
            </>
    )
}

export const CardThree = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            {!hover ? (
                <>
                <div id='main-card' className='background-three' onMouseEnter={e => { e.preventDefault(); setHover(true) }}>

                    <h3 className=''>Skin Care</h3>
                        <p>Treat yourself with our exstensive range of skin care cosmetics and restore your inner beauty</p>
                        </div>
                </>
            ) : (<div id='main-card-hover' className='background-hover-three' onMouseLeave={e => { e.preventDefault(); setHover(false) }}>
                <h3 className=''>Skin Care</h3>
                <h2 className=''>View Products</h2>
            </div>
    )
}
            </>
    )
}

export const CardFour = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            {!hover ? (
                <>
                    <div id='main-card' className='background-four' onMouseEnter={e => { e.preventDefault(); setHover(true) }}>

                        <h3 className=''>About</h3>
                        <p>Something about whatever thiscard will be about in the future..</p>
                    </div>
                </>
            ) : (
                <div id='main-card-hover' className='background-hover-four' onMouseLeave={e => { e.preventDefault(); setHover(false) }}>
                    <h3 className=''>About</h3>
                    <h2 className=''>View Product</h2>
                </div>
            )
            }
        </>
    )
}
