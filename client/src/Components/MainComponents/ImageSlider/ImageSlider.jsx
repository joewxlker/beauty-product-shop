import '../Main.css' 
import './ImageSlider.css'
import { useEffect, useState } from 'react';
    
const ImageSlider = () => {

    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false);

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

    const setActive = (event) => {
        event.preventDefault();
        if (count < 3) setCount(count++);
        else setCount(count = 0)
    }

    const images = [{
        title: 'title one',
        paragraph: 'paragraph one',
        image: 'first image',
    },
    {
        title: 'title two',
        paragraph: 'parafgraph two',
        image: 'scond image',
        },
        {
            title: 'title three',
            paragraph: 'paragraph three',
            image: 'third image',
            }
    ]

    return (
        <>
                <div className='image-slider-container'>
                    <div className='slider-image' onClick={e => { e.preventDefault(); window.location.reload() }} onMouseOver={(e) => { e.preventDefault(); setHover(true) }} onMouseOut={(e) => { e.preventDefault(); setHover(false) }}>
                        <image className='image' alt={images[count].image} />
                        <div className='slider-text-block'>
                            <h1>{images[count].title}</h1>
                            <p>{images[count].paragraph}</p>
                        </div>
                    </div>
                    <div className='image-slider-indicators'>
                        <button className='round-button-active' onClick={setActive} />
                    </div>
                </div>
            
        </>
        
    );
}

export default ImageSlider;