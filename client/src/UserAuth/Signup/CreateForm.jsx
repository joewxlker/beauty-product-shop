import { useState } from 'react';
import useSetForm from '../../Hooks/SetForm.jsx'
import './CreateAccount.css'
import Forms from '../../FormComponents/Forms'
import DropDown from '../../FormComponents/DropDown/DropDown.jsx';
import useSetBool from '../../Hooks/setBoolean.jsx';
import { useEffect } from 'react';
import {checkString} from '../../Services/checkString'
import useSetError from '../../Hooks/setError.jsx';
import useSetTimePeriodValue from '../../Hooks/setTimePeriod.jsx';
import useSetState from '../../Hooks/setState.jsx';
import sendData from '../../Services/sendData.js';

const CreateForm = () => {

    const [bool, setBool] = useSetBool({});
    const [type, setTypes] = useState();
    const [error, setError] = useSetError()
    const [state, setState] = useSetState({})
    const [timePeriodValue, setTimePeriodValue] = useSetTimePeriodValue()
    const [value, setForm] = useSetForm(); 

    const types = ['firstname', 'lastname', 'email', 'password']
    const props = ['day', 'month','year']

    useEffect(() => {
        setError(type, checkString(type, value[type]));
    },[value])
    // if (!accountCreated) {
    const handleData = async (event) => {
        event.preventDefault();
        setState('formLoading', true)

        const { day, month, year } = timePeriodValue;
        const { firstname, lastname, email, password } = value;
        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            day: day,
            month: month,
            year: year
        }
        await sendData('createAccount', userData)
            .then((output) => {
                setError(output['errorType'], true) })
            .then(() => { setState('formLoading', false);})
    }
    if (state['formLoading']) return (<></>)
    return (
        <>
            <div className='form-main-container'>
                <button className='google-login-button'>Login with Google</button>
                <form className='create-account-form' onSubmit={e => { e.preventDefault(); }}>
                    {types.map((type) => {
                        return(
                        <Forms
                            formType={type}
                                onFormChange={setForm}
                                onTypeChange={setTypes}
                                value={value}
                                placeholder={type}
                                error={error}
                            />
                        )
                    })}
                    <button type='submit' onClick={handleData}>Create Account</button>
                </form>
                <div className='dob-container'>
                    {props.map((props) => {
                        return (
                        <DropDown
                            timePeriod={props}
                            onToggle={setBool}
                                toggle={bool}
                                onSetTimePeriodValue={setTimePeriodValue}
                                timePeriodValue={timePeriodValue}
                            />
                        )
                    })}
                    < div />
                </div>
                {state['Please complete the form'] && <p className='text_error'>error</p>}
                
                
                {error['EMPTY_STRING'] && <p className='text_error'>all fields must be filled in</p>}
                {error['MISSING_DOB'] && <p className='text_error'>Please enter your date of birth</p>}
                {error['UNDEFINED'] && <p className='text_error'>all fields must be filled in</p>}
            </div>

        </>
    )
}

export default CreateForm;
