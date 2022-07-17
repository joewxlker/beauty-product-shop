import { useEffect } from 'react'
import { useState } from 'react'
import imageOne from '../../../Images/tincturebluebg.jpg'
import imageTwo from '../../../Images/womenputtingcream.jpg'
import imageThree from '../../../Images/womenwithbrush.jpg'
import './CardOne.css'
import './MainCards.css'

const Card = ({info}) => {
    const [hover, setHover] = useState([])

    const cards = [{
        title: "TRENDING",
        hovertext: 'VIEW PRODUCTS',
        paragraph: '',
        image: imageOne,
        about: ''
    }, {
        title: 'NEW ARRIVALS',
        hovertext: 'VIEW PRODUCTS',
        paragraph: '',
        image: imageTwo,
        about: ''
        }, {
            title: 'MORE COMING SOON...',
            hovertext: 'More items coming soon',
            paragraph: '',
            image: imageThree,
            about: ''
            }]
    
    return (
        <>
            {cards.map((info) => {
                return (
            <>
            {!hover[info.title] ? (
                <>
                <div id='main-card' className='background-one' onMouseEnter={e => { e.preventDefault(); setHover({[info.title]: true}) }}>
                        <h3 className='h3-light'>{info.title}</h3>
                        <p className='p-light'>{info.paragraph}</p>
                                    <img className='card-image' src={info.image} />
                                    
                </div>
                                
                                
                </>
            ) : (<div id='main-card-hover'className='background-hover-one' onMouseLeave={e => { e.preventDefault(); setHover({[info.title]: false}) }}>
                                <h3 className='h3-light'>{info.about}</h3>
                                <h2 className='h2-light'>{info.hovertext}</h2>
                                <img className='card-image' src={info.image} />
                                <div className='card-image'/>
            </div>
                        )
                            
                        }
                </>
            )})}
            </>
    )
}

export default Card