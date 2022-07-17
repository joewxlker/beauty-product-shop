import '../Main.css' 
import './ImageSlider.css'
import Image from '../../../Images/womenholdingbottle.jpg'
import { useEffect, useState } from 'react';
    
const ImageSlider = () => {

    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (hover) return
            if (count < 2)
                setCount(count + 1)
            else
                setCount(0)
        }, 5000);

        return () => clearInterval(interval);
    }, [count]);

    const images = [{
        title: 'KLEANSE  X  HYGIENE',
        paragraph: "",
        image: Image,
        active: [true, false, false]
    },
    {
        title: 'KLEANSE AND COFFEE',
        paragraph: '',
        image: Image,
        active: [false, true, false]
        },
        {
            title: 'KLEANSE  REWARDS',
            paragraph: '',
            image: Image,
            active: [false, false, true]
            }
    ]

    return (
        <>
            <div className='image-slider-container'>
                <div className='slider-image'>
                    <img className='image' alt={images[count].image} src={images[count].image} />
                    <div className='slider-text-block'>
                        <div className='slider-text-skewed'>
                        </div>
                    </div>
                </div>
                <div className='image-slider-indicators'>
                    <button className={`round-button-${images[count].active[0]}`} onClick={e => { e.preventDefault(); setCount(0) }} />
                    <button className={`round-button-${images[count].active[1]}`} onClick={e => { e.preventDefault(); setCount(1) }} />
                    <button className={`round-button-${images[count].active[2]}`} onClick={e => { e.preventDefault(); setCount(2) }} />
                </div>
            </div>
            <div id='overlay' className='image-slider-container'>
                <button
                    className='prev-slide'
                    onClick={
                        e => {
                            e.preventDefault();
                            if (count > 0) { setCount(count - 1) }
                            else { setCount(2) }
                        }}></button>
                <div className='text-body'>
                    <h1 className='slider-title'>{images[count].title}</h1>
                    <p className='slider-p'><em> {images[count].paragraph} </em></p>
                    <button className='slider-main-button'>SHOP NOW</button>
                </div>
                <button className='next-slide'
                    onClick={
                        e => {
                            e.preventDefault();
                            if (count < 2) { setCount(count + 1) }
                            else { setCount(0) }
                        }}><i class="" /></button>
            </div>

        </>
        
    );
}

export default ImageSlider;