import './Main.css'
import ImageSlider from './ImageSlider/ImageSlider';
import MainCards from './MainCards/MainCards.jsx'

const Main = () => {
    
        return (
            <>
                <div className='main-entry-container' alt='women holding flower'>
                    <ImageSlider />
                    <MainCards />
                </div>
            </>
        );
}

export default Main;