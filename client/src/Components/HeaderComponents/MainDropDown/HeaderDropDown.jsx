import './HeaderDropDown.css'
import HandleLogin from '../../../UserAuth/Login/HandleLogin'
import HandleSignUp from '../../../UserAuth/Signup/CreateAccount.jsx'
import HandleCart from '../../CartComponents/HandleCart'
import Userlogo from '../../../Images/femaleuser.svg'
import { useCallback, useEffect } from 'react'


const DropDownButton = ({bool, onToggle}) => {

    const handleChange = useCallback((type, value) => {
        onToggle(type,value)
    })

    useEffect(() => {
        console.log(bool['sidebar'])
      },[])

    return (
        <>
            {!bool['sidebar'] ?
                (
                    <button className='header-dropdown-button' onClick={e => { e.preventDefault(); handleChange('sidebar', true) }}>
                        <span className='header-dropdown-span'>
                            <img className='header-dropdown-svg' src={Userlogo} alt='userlogo' />
                        </span>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container'>
                            <button className='header-dropdown-button-open' onClick={e => { e.preventDefault(); handleChange('sidebar', false) }}> X </button>
                            <div className='header-dropdown-menu'>
                                <HandleLogin />
                                <HandleCart />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}


export default DropDownButton;