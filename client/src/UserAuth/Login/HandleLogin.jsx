import { Link } from "react-router-dom";
import './HandleLogin.css'
import Forms from "../../Components/FormComponents/Forms";
import useSetForm from "../../Hooks/SetForm";
import {sendData} from "../../Services/sendData";
import { useState } from "react";
import useSetError from "../../Hooks/setError";
import { getLocalData, setLocalData } from "../../Services/handleLocalData";
import { useEffect } from "react";
import { useCallback } from "react";

const HandleLogin = ({ setLoggedIn }) => {

    const tokenemail = localStorage.getItem('email')
    const tokenPassword = localStorage.getItem('password')
    const [value, setForm] = useSetForm();
    const [error, setError] = useSetError();
    const [type, setTypes] = useState();
    const types = ['email', 'password']

    const setStatus = useCallback(() => {
        setLoggedIn(true);
    })
    const handleLogin = (email, password) => {
        if (value['honeypot'] !== undefined) return;
        sendData('login', { email: email, password: password })
            .then((output) => {
                if (output.output === true) {
                    setLocalData('userInfo', JSON.stringify({ email: email, password: output.password }));
                    setStatus();
                    // window.location.href = '/success'
                }
                else return false
            })
    }
    
    const handleLogout = () => {
        sendData('login', { email: '', password: '' })
            .then((output) => {
                console.log(output);
                setLocalData('', '');
                window.location.reload();
            })
    }

    if (tokenPassword === null || tokenPassword === '') {
        return (
            <div className='login-main-container border-bottom'>
                <div className='handle-login-container'>
                    {types.map((type) => {
                        return (
                            <Forms
                                formType={type}
                                onFormChange={setForm}
                                onTypeChange={setTypes}
                                value={value}
                                placeholder={type}
                                error={error}
                            />)
                    })}
                    <button className='login-button' type='submit' onClick={e => {
                        e.preventDefault();
                        handleLogin(value.email, value.password)
                    }}> login </button>
                </div>
                <Link to='/createaccount' className='signup-link'><h5>Dont have an account? sign up here!</h5></Link>
            </div>
        );
    } else {
        return (
            <div className='logout-container border-bottom'>
                <h3>Welcome back {tokenemail}</h3>
                <button className='login-button' onClick={(e) => {
                    e.preventDefault()
                    handleLogout(value.email, value.password);

                }}>Logout</button>
            </div>
        )
    }
}

export default HandleLogin;