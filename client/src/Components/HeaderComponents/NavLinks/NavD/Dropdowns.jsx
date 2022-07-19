import { useEffect } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import './DD.css'

const NavDropdowns = ({ onMouseLeave, boolean, display }) => {

    const content = [1,1,1,1]
    const hideDD = useCallback(() => {
        onMouseLeave();
    })

    return (
        <>
            {boolean &&
                <>
                    <div className='up-arrow' style={{ display: `${display}` }} />
                    <div className='nav-main-dropdown-container' onMouseLeave={hideDD} style={{ display: `${display}`, left: '20vw' }}>

                        {content.map(() => {
                            return (
                                <div className="nav-dd-columns">
                                    <span className='title-span'>
                                        <Link to='/products/skincare' className=''><h6>SHOP SKINCARE</h6></Link>
                                    </span>
                                    <div className='text-containers'>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>}
        </>
    );
}

export default NavDropdowns;