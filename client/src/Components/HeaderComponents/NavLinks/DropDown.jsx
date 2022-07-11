import { useState } from 'react';
import '../Header.css'
import {MobileNavLinks} from './NavLinks';
// import { Link } from 'react-router-dom'

const MobileDropDown = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            
            {!open ?
                (
                    <button className='mobile-dropdown-button' onClick={e => { e.preventDefault(); setOpen(true) }}> ... </button>
                ) : (
                    <>
                    <button className='mobile-dropdown-button' onClick={e => { e.preventDefault(); setOpen(false) }}> ... </button>
                        <div className='menu'>
                            <MobileNavLinks/>
                        </div>
                    </>
                )
            }
        </>
    );

};

export default MobileDropDown;