import '../Main.css' 
import './ImageSlider.css'
import { useEffect, useState } from 'react';
    
const ImageSlider = () => {

    const [count, setCount] = useState(1);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (hover) return
            if (count < 3)
                setCount(count + 1)
            else
                setCount(1)
        }, 5000);
        return () => clearInterval(interval);
    }, [count]);

    const setActiveOne = (event) => {
        event.preventDefault();
        setCount(1);

    }
    const setActiveTwo = (event) => {
        event.preventDefault();
        setCount(2);

    }
    const setActiveThree = (event) => {
        event.preventDefault();
        setCount(3);

    }

    const images = [
        (
            <div className='image-slider-one'>
                <div className='slider-image' onClick={e => { e.preventDefault();  window.location.reload()}} onMouseOver={(e) => { e.preventDefault(); setHover(true) }} onMouseOut={(e) => { e.preventDefault(); setHover(false) }}>
                    <image className='image' />
                    <div className='slider-text-block'>
                        <h1>Bring excitement to you life</h1>
                        <p>With our new range of skin care products you can bring a new sense of joy and pleasure to your life!</p>
                    </div>
                </div>
                <div className='image-slider-indicators'>
                    <button className='round-button-active' onClick={setActiveOne} />
                    <button className='round-button' onClick={setActiveTwo} />
                    <button className='round-button' onClick={setActiveThree} />
                </div>
            </div>
        ),
        (
            <div className='image-slider-two' >
                <div className='slider-image' onClick={e => { e.preventDefault();  window.location.reload()}} onMouseOver={(e) => { e.preventDefault(); setHover(true) }} onMouseOut={(e) => { e.preventDefault(); setHover(false) }}>
                    <image className='image' />
                    <div className='slider-text-block'>
                        <h1>Buy one get one free!</h1>
                        <p>This limited time only offer lets you purchase two of our newskin oils for the price of one. So grab a friend and enjoy a two for one deal together</p>
                    </div>
                </div>
                <div className='image-slider-indicators'>
                    <button className='round-button' onClick={setActiveOne} />
                    <button className='round-button-active' onClick={setActiveTwo} />
                    <button className='round-button' onClick={setActiveThree} />
                </div>
            </div>
        ),
        (
            <div className='image-slider-three'>
                <div className='slider-image' onClick={e => { e.preventDefault();  window.location.reload()}} onMouseOver={(e) => { e.preventDefault(); setHover(true) }} onMouseOut={(e) => { e.preventDefault(); setHover(false) }}>
                    <image className='image' />
                    <div className='slider-text-block'>
                        <h1>New ointments in stock!</h1>
                        <p>With our new ointments you can feel young agin!</p>
                    </div>
                </div>
                <div className='image-slider-indicators'>
                    <button className='round-button' onClick={setActiveOne} />
                    <button className='round-button' onClick={setActiveTwo} />
                    <button className='round-button-active' onClick={setActiveThree} />
                </div>
            </div>
        )
    ]

    

    if (count === 1) return (
        <div className='image-slider-main-container'>
            {images[0]}
        </div>
    )
    if (count === 2)
        return (
            <div className='image-slider-main-container'>
            {images[1]}
        </div>
        )
    if (count === 3)
        return (
            <div className='image-slider-main-container'>
            {images[2]}
        </div>
        )

}

export default ImageSlider;