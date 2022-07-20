import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import './DD.css'

const NavDropdowns = ({ onMouseLeave, boolean, display }) => {

    const content = [
        {
            type: 'Facial Products',
            subtypes: ['Massage','Lotions', 'Exfoliate'],
        },
        {
            type: 'Skin Care',
            subtypes: ['Massage','Lotions', 'Exfoliate'],
        },
        {
            type: 'Accessories',
            subtypes: ['Massage','Lotions', 'Exfoliate'],
        },
        {
            type: 'Other',
            subtypes: ['Dildos','ButtPlugs', 'Anal Beads'],
        }
    ]
    const hideDD = useCallback(() => {
        onMouseLeave();
    })

    return (
        <>
            {boolean &&
                <>
                    <div className='up-arrow' style={{ display: `${display}` }} />
                    <div className='nav-main-dropdown-container' onMouseLeave={hideDD} style={{ display: `${display}`, left: '20vw' }}>

                        {content.map((types) => {
                            return (
                                <div className="nav-dd-columns">
                                    <span className='title-span'>
                                        <Link to={`products/${types.type}`} className=''><h5>{types.type}</h5></Link>
                                    </span>
                                    <div className='text-containers'>
                                        {types.subtypes.map((items) => {
                                            return (
                                                <ul>
                                                   <Link to={`products/${types.type}/${items}`}><li><h6>{items}</h6></li></Link>
                                            </ul>
                                        )})}
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