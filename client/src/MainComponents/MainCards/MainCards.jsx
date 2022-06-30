import './MainCards.css'
import {CardOne, CardTwo, CardThree, CardFour} from './Cards'

const MainCards = () => {

    return (
        <>
            <div className='cards-container'>
            <h2>Newest Collections</h2>
            <div className='main-cards-container'>
                <CardOne />
                <CardTwo />
                <CardThree />
                <CardFour />
                </div>
                </div>
        </>
    )
}

export default MainCards;