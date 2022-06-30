import './HeaderDropDown.css'
import HandleLogin from '../../AuthenticationComponents/HandleLogin.jsx'
import HandleSignUp from '../../AuthenticationComponents/HandleSignup.jsx'
import HandleCart from '../../CartComponents/HandleCart'
import Userlogo from '../../Images/femaleuser.svg'
import useSetDropDownState from '../../Hooks/DropdownHook';


const DropDownButton = () => {

    const [open, setOpen] = useSetDropDownState();

    return (
        <>
            {!open ?
                (
                    <button className='header-dropdown-button' onClick={e => { e.preventDefault(); setOpen(true) }}>
                        <span className='header-dropdown-span'>
                            <img className='header-dropdown-svg' src={Userlogo} alt='userlogo' />
                        </span>
                    </button>
                ) : (
                    <>
                        <div className='header-dropdown-container'>
                            <button className='header-dropdown-button-open' onClick={e => { e.preventDefault(); setOpen(false) }}> X </button>
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