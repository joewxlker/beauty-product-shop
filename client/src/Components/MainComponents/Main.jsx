import './Main.css'
import ImageSlider from './ImageSlider/ImageSlider';
import MainCards from './MainCards/MainCards.jsx'

const Main = ({mobile, bool}) => {
    console.log(bool)
    return (
        <>
            <div className='main-entry-container' alt='women holding flower'>
                <ImageSlider />
                <MainCards />
            </div>
            {bool['sidebar'] && mobile && <div className='darken-bg'/>}
        </>
    );
}

export default Main;