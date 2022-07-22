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
    
const CreateForm = ({types, props, origin}) => {

    const [bool, setBool] = useSetBool({});
    const [type, setTypes] = useState();
    const [error, setError] = useSetError()
    const [state, setState] = useSetState({})
    const [timePeriodValue, setTimePeriodValue] = useSetTimePeriodValue()
    const [value, setForm] = useSetForm(''); 

    useEffect(() => {
        setError(type, checkString(type, value[type]));
    },[value, timePeriodValue])

    const handleData = async (event) => {
        event.preventDefault();
        if (value['honeypot'] !== undefined) return;
        for (let v in types) {
            if(value[types[v]] === undefined || value[types[v]] === '') {return setError('EMPTY_STRING', true)}
            let timeBool = checkString('dateofbirth', timePeriodValue[props[v]])
            let stringBool = checkString(types[v], value[types[v]])
            if (timeBool === true) return
            if(stringBool === true) return
        }
        setState('formLoading', true)
        const userData = { ...value, ...timePeriodValue }
        await sendData('createAccount', userData)
            .then((output) => {
                if (output.output === true) {
                    window.location.href = '/successlogin';
                } 
                setError(output['errorType'], true) })
            .then(() => { setState('formLoading', false);})
    }
    if (state['formLoading']) return (<></>)
    if(types === undefined) return
    return (
        <>
            <div className='form-main-container'>
                {origin !== 'checkout' && <GoogleLoginButton />}
                <form className='create-account-form' onSubmit={e => { e.preventDefault(); }}>
                    {types.map((type) => {
                        return(
                            <Forms
                                origin={origin}
                            formType={type}
                                onFormChange={setForm}
                                onTypeChange={setTypes}
                                value={value}
                                placeholder={type}
                                error={error}
                            />

                        )
                    })}
                    <>
                    {props !== undefined &&     
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
                    </div>
                }
                    </>
                    {origin !== 'checkout' && < button className='createform-submit-button' type='submit' onClick={handleData}>Create Account</button> }
                
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
