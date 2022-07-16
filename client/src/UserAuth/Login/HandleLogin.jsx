import { Link } from "react-router-dom";
import './HandleLogin.css'
import Forms from "../../Components/FormComponents/Forms";
import useSetForm from "../../Hooks/SetForm";
import {sendData} from "../../Services/sendData";
import { useState } from "react";
import useSetError from "../../Hooks/setError";
import { getLocalData, setLocalData } from "../../Services/handleLocalData";

const HandleLogin = () => {

    const tokenemail = localStorage.getItem('email')
    const tokenPassword = localStorage.getItem('password')
    const [value, setForm] = useSetForm();
    const [error, setError] = useSetError();
    const [type, setTypes] = useState();
    const types = ['email', 'password']

    const handleLogin = (email, password) => {
        console.log(email,password)
        sendData('login', { email: email, password: password })
            .then((output) => {
                if (output === true) {
                    console.log('user logged in');
                    setLocalData(email, password);
                    window.location.reload()
                }
                else console.log('user login failed')
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