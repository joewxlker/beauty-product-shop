import { useState } from "react";
import { Link } from "react-router-dom";
import './HandleLogin.css'
import Forms from "../CreateAccountComponents/FormComponents/Forms";
import useSetForm from "../Hooks/SetForm";

const HandleLogin = () => {

    const [value, setForm] = useSetForm();
    const tokenemail = localStorage.getItem('email')
    const tokenPassword = localStorage.getItem('password')
    const props = ['email','password']
    const setLocalData = (email, password) => {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
    } 

    const handleLogin = (email,password) => {
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(setLocalData(email,password))
            .then((res) => res.json())
            .then((data) => {
                if (data === true){ console.log('user logged in');  window.location.reload()}
                else console.log( 'user login failed' )
            })
    }
    
    const handleLogout = () => {
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ email: '', password: '' })
        })
            .then(setLocalData('', ''))
            .then((res) => res.json())
            .then((data) => { console.log(data);  window.location.reload()})
    }

    if (tokenPassword === null || tokenPassword === '') {
        return (
            <div className='login-main-container border-bottom'>
                <div className='handle-login-container'>
                    <form>
                        {props.map((type) => { return (
                            <Forms formType={type} onFormChange={setForm} />
                        )
                    })}
                        <button className='login-button' type='submit' onClick={e => {
                            e.preventDefault();
                            handleLogin(value.email, value.password)
                        }}> login </button>
                    </form>
            
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