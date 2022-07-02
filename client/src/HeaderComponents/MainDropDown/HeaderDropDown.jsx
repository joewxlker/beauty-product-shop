import './HeaderDropDown.css'
import HandleLogin from '../../AuthenticationComponents/HandleLogin.jsx'
import HandleSignUp from '../../AuthenticationComponents/HandleSignup.jsx'
import HandleCart from '../../CartComponents/HandleCart'
import Userlogo from '../../Images/femaleuser.svg'
import { useCallback } from 'react'


const DropDownButton = ({ bool, onToggle }) => {
    const handleChange = useCallback((type, value) => {
        onToggle(type, value)
        console.log(bool)
    },[])

    return (
        <>
            {!bool['sidebar'] ?
                (
                    <button className='header-dropdown-button' onClick={e => {e.preventDefault();handleChange('sidebar',true)}}>
                        <span className='header-dropdown-span'>
                            <img className='header-dropdown-svg' src={Userlogo} alt='userlogo' />
                        </span>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container'>
                            <button className='header-dropdown-button-open' onClick={e => {e.preventDefault();handleChange('sidebar',false)}}> X </button>
                            <div className='header-dropdown-menu'>
                                <HandleLogin />
                                <HandleSignUp />
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