import { useEffect, useState } from 'react';
import useSetForm from '../Hooks/SetForm.jsx'
import DobWidget from './DateOfBirth'
import {TitleTextBox} from './Texts'
import './CreateAccount.css'
import { useSetDay, useSetMonth, useSetYear } from '../Hooks/useSetDob.jsx';
import useToggleDay, { useToggleMonth, useToggleYear } from '../Hooks/ToggleDob.jsx';
import { Link } from 'react-router-dom';

const CreateForm = () => {

    const [passwordMatch, setPasswordMatch] = useState(true);
    const [value, setForm] = useSetForm({ firstname: '', lastname: '', email: '', password: '', passwordTwo: '', });
    const [dayToggle, setDayToggle] = useToggleDay();
    const [monthToggle, setMonthToggle] = useToggleMonth();
    const [day, setDay] = useSetDay('Day')
    const [month, SetMonth] = useSetMonth('Month');
    const [dayCount, setDayCount] = useState(31)
    const [year, setYear] = useSetYear('Year');
    const [yearToggle, setYearToggle] = useToggleYear()
    const [loading, setLoading] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false)
    const [sendBool, setSendBool] = useState(true);

    const DayDropDown = () => {
    
        let dayArray = [];
        let smallMonths = ['September', 'June', 'April', 'June', 'November']
        for (let i = 1; i <= dayCount; i++) {
            dayArray.push(i);
        }
        useEffect(() => {
            if (month[0] === 'February') { setDayCount(29) }
            for (let v in smallMonths) {
                if (month[0] === smallMonths[v] && day > 30) { setDayCount(30) };
            }
            if (month[0] !== 'February' && month[0] !== smallMonths) { setDayCount(31); }
        }, [day, month])
        
        return (
            <>
                {!dayToggle ? (
                    <div id='day' className='dob-button' onClick={e => {
                        e.preventDefault();
                        setMonthToggle(false);
                        setYearToggle(false);
                        if (dayToggle) { setDayToggle(false); }
                        else setDayToggle(true)
                    }}>
                        <span className='button-span'><p>{day}</p>\/</span>
                    </div>
                ) : (
                    <>
                        <div id='day' className='dob-button' onClick={e => {
                            e.preventDefault();
                            setMonthToggle(false);
                            setYearToggle(false);
                            if (dayToggle) { setDayToggle(false); }
                            else setDayToggle(true)
                        }}>
                            <span className='button-span'><p>{day}</p>\/</span>
                        </div>
                        <span className='dd-span'>
                            <div className='dd-container'>
                                <p className='list-items' onClick={e => { e.preventDefault(); setDay('Day'); setDayToggle() }}>Day</p>
                                <ul>
                                    {dayArray.map((days, id) => {
                                        return (
                                            <li className='list-items' key={id} onClick={e => { e.preventDefault(); setDay([days]); setDayToggle(false) }}>
                                                <span className='list-items'>
                                                    {days}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </span>
                    </>
                )
                }
            </>
        );
    }
    const MonthDropDown = () => {
    
        let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return (
            <>
                {!monthToggle ? (
                    <div id='month' name='month' className='dob-button' onClick={e => {
                        e.preventDefault();
                        setDayToggle(false);
                        setYearToggle(false);
                        if (monthToggle) { setMonthToggle(false); }
                        else setMonthToggle(true)
                    }}>
                        <span className='button-span'><p>{month}</p>\/</span>
                    </div>
                ) : (
                    <>
                        <div id='month' name='month' className='dob-button' onClick={e => {
                            e.preventDefault();
                            setDayToggle(false);
                            setYearToggle(false);
                            if (monthToggle) { setMonthToggle(false); }
                            else setMonthToggle(true)
                            
                        }}>
                            <span className='button-span'><p>{month}</p>\/</span>
                        </div>
                        <span className='dd-span'>
                            <div className='dd-container'>
                                <p className='list-items' onClick={e => { e.preventDefault(); SetMonth('Month'); setMonthToggle() }}>Month</p>
                                <ul>
                                    {monthArray.map((months, id) => {
                                        return (
                                            <li className='list-items' key={id} onClick={e => { e.preventDefault(); SetMonth([months]); setMonthToggle(false) }}>
                                                <span className='list-items'>
                                                    {months}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </span >
                    </>
                )
                }
            </>
        )
    }

    const YearDropDown = () => {
        let yearArray = [];
        for (let i = 1960; i <= 2022; i++) {
            yearArray.push(i);
        }

        return (
            <>
                {!yearToggle ? (
                    <div id='year' className='dob-button' onClick={e => {
                        e.preventDefault();
                        setDayToggle(false);
                        setMonthToggle(false);
                        if (yearToggle) setYearToggle(false)
                        else setYearToggle(true)
                    }}>
                        <span className='button-span'><p>{year}</p>\/</span>
                    </div>
                ) : (
                    <>
                        <div id='year' className='dob-button' onClick={e => {
                            e.preventDefault();
                            setDayToggle(false);
                            setMonthToggle(false);
                            if (yearToggle) setYearToggle(false)
                            else setYearToggle(true)
                        }}>
                            <span className='button-span'><p>{year}</p>\/</span>
                        </div>
                        <span className='dd-span'>
                            <div className='dd-container'>
                                <p className='list-items' onClick={e => { e.preventDefault(); setYear('Year'); setYearToggle(false) }}>{year}</p>
                                <ul>
                                    {yearArray.map((years, id) => {
                                        return (
                                            <li className='list-items' key={id} onClick={e => { e.preventDefault(); setYear([years]); setYearToggle(false) }}>
                                                <span className='list-items'>
                                                    {years}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div >
                        </span>
                    </>
                )}
            </>
        )
    }


    const sendData = () => {
        if (value.password !== value.passwordTwo) { setPasswordMatch(false); return }
        if (value.firstname === '' || value.firstname === undefined) return setSendBool(false)
        if (value.lastname === '' || value.lastname === undefined) return setSendBool(false)
        if (value.email === '' || value.email === undefined) return setSendBool(false)
        if (day[0] === 'D' || day[0] === undefined) return setSendBool(false)
        if (month[0] === 'M' || month[0] === undefined) return setSendBool(false)
        if (year[0] === 'Y' || year[0] === undefined) return setSendBool(false)
        if (value.password === '' || value.password === undefined) return setSendBool(false)
        setLoading(true)
        fetch('http://localhost:5000/api/createAccount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: value.firstname,
                lastname: value.lastname,
                email: value.email,
                password: value.password,
                birthday: day[0].toString(),
                birthmonth: month[0].toString(),
                birthyear: year[0].toString()
            })
        }).then((res) => res.json())
            .then((data) => {
                if (data.data === 'success') {
                    setLoading(false);
                    setAccountCreated(true);
                }
            });
    }

    const Password = () => {
        if (passwordMatch) {
            return (
                <div className='password-container'>
                    <span>
                        <input className='createform-input' placeholder="password..." type='password' name='password' value={value.password} onChange={setForm} />
                    </span>
                    <span>
                        <input className='createform-input' placeholder="password..." type='password' name='passwordTwo' value={value.passwordTwo} onChange={setForm} />
                    </span>
                </div>
            )
        } else return (
            <div className='password-container'>
                <span>
                    <input className='createform-input' placeholder="password..." type='password' name='password' value={value.password} onChange={setForm} />
                </span>
                <span>
                    <input className='createform-input' placeholder="password..." type='password' name='passwordTwo' value={value.passwordTwo} onChange={setForm} />
                    <p className='error-text'>passwords do not match</p>
                </span>
            </div>
        )
    }

    if (!accountCreated) {
        return (
            <>
                {!loading ? (
                    <div className='form-main-container'>
                        <TitleTextBox />
                        <button className='google-login-button'>Login with Google</button>
                        <>{!sendBool ? (<>All fields must be filled in</>): (<></>)}</>
                        <form className="createform-form" onSubmit={e => { e.preventDefault(); sendData() }}>
                            <span>
                                <input className='createform-input' placeholder="first name..." name='firstname' value={value.firstname} onChange={setForm} />
                            </span>
                            <span>
                                <input className='createform-input' placeholder="last name..." name='lastname' value={value.lastname} onChange={setForm} />
                            </span>
                            <span>
                                <input className='createform-input' placeholder="email..." name='email' value={value.email} onChange={setForm} />
                            </span>
                            <div className='dob-container'>
                                <YearDropDown />
                                <DayDropDown />
                                <MonthDropDown />
                                
                            </div>
                            <Password />
                            <button className='submit-button'>Create account</button>
                        </form>
                    </div>
                ) : (
                    <div className='form-main-container'>
                        <h1> Loading </h1>
                    </div>
                )
                }
            </>
        );
    } else {
        return (
        <div className='form-main-container'>
                <h1>Account created</h1>
                <Link to='/'>Everything is all set up! You can use this link to return to the main homepage</Link>
            </div>
        )
    }
}

export default CreateForm;