import { useCallback, useState } from 'react';
import useSetForm from '../../Hooks/SetForm.jsx'
import '../CreateAccount.css'
import Forms from './Forms'
import DropDown from './DropDown.jsx';
import useSetBool from '../../Hooks/setBoolean.jsx';

const CreateForm = () => {

    const [value, setForm] = useSetForm({})
    const [bool, setBool] = useSetBool({});
    const [formState, setFormState] = useState({})
    // const [error, setError] = useSetError()

    const sendData = () => {
        console.log(value,bool)
    }
    const props = ['day', 'month', 'year']
    const types = ['firstname', 'lastname', 'email', 'password']

    // if (!accountCreated) {
    return (
        <>
            <div className='form-main-container'>
                <button className='google-login-button'>Login with Google</button>
                <form className='create-account-form' onSubmit={e => { e.preventDefault(); }}>
                    {types.map((type) => {
                        return(
                        <Forms
                            formType={type}
                            onFormChange={setForm} />
                        )
                    })}
                    <button type='submit' onClick={e => { e.preventDefault(); sendData() }}>Create Account</button>
                </form>
                <div className='dob-container'>
                    {props.map((props) => {
                        return (
                        <DropDown
                            timePeriod={props}
                            onToggle={setBool}
                            toggle={bool}
                            onDayCountChange={props}
                            dayCount={props}
                            onTimePeriodchange={props}
                            />
                        )
                    })}
                    < div />
                </div>
            </div>

        </>
    )
}

// import { useCallback } from "react"

// const Forms = ({ formType, onFormChange}) => {
      
//   const handleChange = useCallback((event) => {
//     onFormChange(event)
//   }, [])

//   return (
//     <span>
//       <input className='createform-input' placeholder={`${formType}`} name={formType} value={formType} onChange={handleChange}/>
//     </span>
//   )
// }

export default CreateForm;
