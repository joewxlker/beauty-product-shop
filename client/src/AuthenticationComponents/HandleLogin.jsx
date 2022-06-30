import { useState } from "react";
import { Link } from "react-router-dom";
import './HandleLogin.css'

const HandleLogin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const tokenUsername = localStorage.getItem('username')
    const tokenPassword = localStorage.getItem('password')

    const setLocalData = (username, password) => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
    } 

    const handleLogin = () => {
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(setLocalData(username, password))
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
            body: JSON.stringify({ username: '', password: '' })
        })
            .then(setLocalData('', ''))
            .then((res) => res.json())
            .then((data) => { console.log(data);  window.location.reload()})
    }

    if (tokenPassword === null || tokenPassword === '') {
        return (
            <div className='login-main-container border-bottom'>
                <div className='handle-login-container'>
                    <form
                        className='login-form'
                        onSubmit={e=>{ e.preventDefault(); handleLogin()}}>
                        <input
                            className='login-input'
                            pLaceholder='username..'
                            input='text'
                            name='email'
                            value={username}
                            onChange={
                                e => {
                                    e.preventDefault(); setUsername(e.target.value)
                                }} />
                
                        <input
                            className='login-input'
                            pLaceholder='password..'
                            type='password'
                            input='text'
                            name='email'
                            value={password}
                            onChange={
                                e => {
                                    e.preventDefault(); setPassword(e.target.value)
                                }} />
                        <button className='login-button' type='submit'> login </button>
                    </form>
            
                </div>
                <Link to='/createaccount' className='signup-link'><h5>Dont have an account? sign up here!</h5></Link>
            </div>
        );
    } else {
        return (
            <div className='logout-container border-bottom'>
                <h3>Welcome back {tokenUsername}</h3>
                <button className='login-button' onClick={(e) => {
                    e.preventDefault()
                    handleLogout();

                }}>Logout</button>
            </div>
        )
    }
}

export default HandleLogin;