import '../small.css'
import '../medium.css'
import '../large.css'
import { useState } from 'react';
import useSetForm from '../../Hooks/SetForm.jsx'
import Forms from '../../Components/FormComponents/Forms'
import DropDown from './DOBDropDown/DropDown.jsx';
import useSetBool from '../../Hooks/setBoolean.jsx';
import { useEffect } from 'react';
import {checkString} from '../../Services/checkString'
import useSetError from '../../Hooks/setError.jsx';
import useSetTimePeriodValue from '../../Hooks/setTimePeriod.jsx';
import useSetState from '../../Hooks/setState.jsx';
import {sendData} from '../../Services/sendData.js';
import GoogleLoginButton from '../../GoogleAuth/GoogleLogin'

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
    },[value, timePeriodValue])

    const handleData = async (event) => {
        event.preventDefault();
        const t = [...types,...props]
        for (let v in t) {
            let timeBool = checkString('dateofbirth', timePeriodValue[props[v]])
            let stringBool = checkString(types[v], value[types[v]])
            if (timeBool === true) return
            if(stringBool === true) return
        }
        setState('formLoading', true)
        const userData = { ...value, ...timePeriodValue }
        await sendData('createAccount', userData)
            .then((output) => {
                console.log(output)
                setError(output['errorType'], true) })
            .then(() => { setState('formLoading', false);})
    }
    if (state['formLoading']) return (<></>)
    return (
        <>
            <div className='form-main-container'>
                <GoogleLoginButton/>
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
                                    <div className='dob-container'>
                    {props.map((props) => {
                        return (
                        <DropDown
                            timePeriod={props}
                            onToggle={setBool}
                                toggle={bool}
                                onSetTimePeriodValue={setTimePeriodValue}
                                timePeriodValue={timePeriodValue}
                                onSetTypes={setTypes}
                            />
                        )
                    })}
                    < div />
                    
                </div>
                <button className='createform-submit-button' type='submit' onClick={handleData}>Create Account</button>
                </form>

                {state['Please complete the form'] && <p className='text_error'>error</p>}
                {error['EMPTY_STRING'] && <p className='text_error'>all fields must be filled in</p>}
                {error['MISSING_DOB'] && <p className='text_error'>Please enter your date of birth</p>}
                {error['UNDEFINED'] && <p className='text_error'>all fields must be filled in</p>}
            </div>

        </>
    )
}

export default CreateForm;
