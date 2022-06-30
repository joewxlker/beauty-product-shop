import { useState } from 'react';
import useSetForm from '../../Hooks/SetForm.jsx'
import '../CreateAccount.css'
import { Link } from 'react-router-dom';
import DayDropDown from './DayComponents.jsx';
import MonthDropDown from './MonthComponent.jsx';
import YearDropDown from './YearComponent.jsx';
import LastNameForm from './LastName.jsx';
import EmailForm from './Email.jsx';
import {PasswordFormOne,PasswordFormTwo} from './Password.jsx';
import FirstNameForm from './FirstNameForm.jsx';

const CreateForm = () => {

    const [passwordMatch, setPasswordMatch] = useState(true);
    const [value, setForm] = useSetForm({ firstname: '', lastname: '', email: '', password: '', passwordTwo: '', });
    const [dayToggle, setDayToggle] = useState();
    const [monthToggle, setMonthToggle] = useState();
    const [day, setDay] = useState('Day')
    const [month, setMonth] = useState('Month');
    const [dayCount, setDayCount] = useState(31)
    const [year, setYear] = useState('Year');
    const [yearToggle, setYearToggle] = useState()
    const [loading, setLoading] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false)
    const [sendBool, setSendBool] = useState(true);

    const sendData = (firstname, lastname, email, password, passwordTwo, day, month, year) => {
        console.log({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                birthday: day,
                birthmonth: month,
                birthyear: year
        })
        if (password !== passwordTwo) { setPasswordMatch(false); return }
        if (firstname === '' || firstname === undefined) return setSendBool(false)
        if (lastname === '' || lastname === undefined) return setSendBool(false)
        if (email === '' || email === undefined) return setSendBool(false)
        if (day === '' || day === undefined) return setSendBool(false)
        if (month === '' || month === undefined) return setSendBool(false)
        if (year === '' || year === undefined) return setSendBool(false)
        if (password === '' || password === undefined) return setSendBool(false)
        setPasswordMatch(true)
        setLoading(true)
        fetch('http://localhost:5000/api/createAccount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                birthday: day,
                birthmonth: month,
                birthyear: year
            })
        }).then((res) => res.json())
            .then((data) => {
                if (data.data === 'success') {
                    setLoading(false);
                    setAccountCreated(true);
                }
            });
    }

    if (!accountCreated) {
        return (
            <>
                {!loading ? (
                    <div className='form-main-container'>

                        <button className='google-login-button'>Login with Google</button>
                        <>{!sendBool ? (<>All fields must be filled in</>) : (<></>)}</>

                        <form className='create-account-form' onsubmit={e => { e.preventDefault();}}>
                        <FirstNameForm name='firstname' firstname={value.firstname} onFirstNameChange={setForm} />
                        <LastNameForm name='lastname' lastname={value.lastname} onLastNameChange={setForm}/>
                        <EmailForm name='email' email={value.email} onEmailChange={setForm}/>
                        <PasswordFormOne name='password' type='password' password={value.password} onPasswordChange={setForm} passwordMatch={passwordMatch} />
                        <PasswordFormTwo name='password' type='password' password={value.passwordTwo} onPasswordChange={setForm} passwordMatch={passwordMatch} />
                        <button type='submit' onClick={e=> {e.preventDefault(); sendData(value.firstname,value.lastname,value.email,value.password, value.passwordTwo,day,month,year)}}>Create Account</button>
                        </form>
                        
                        <div className='dob-container'>
                        <DayDropDown
                            day={day}
                            year={year}
                            month={month}
                            dayToggle={dayToggle}
                            onDayCountChange={setDayCount}
                            yearToggle={yearToggle}
                            monthToggle={monthToggle}
                            dayCount={dayCount}
                            onDayChange={setDay}
                            onMonthChange={setMonth}
                            onYearChange={setYear}
                            onYearToggle={setYearToggle}
                            onDayToggle={setDayToggle}
                        />
                            
                        <MonthDropDown
                            day={day}
                            year={year}
                            month={month}
                            dayToggle={dayToggle}
                            monthToggle={monthToggle}
                            onDayCountChange={setDayCount}
                            yearToggle={yearToggle}
                            dayCount={dayCount}
                            onDayChange={setDay}
                            onMonthChange={setMonth}
                            onMonthToggle={setMonthToggle}
                            onYearChange={setYear}
                            onDayToggle={setDayToggle}
                            onYearToggle={setYearToggle}
                        />

                        <YearDropDown
                            day={day}
                            year={year}
                            month={month}
                            dayToggle={dayToggle}
                            onDayCountChange={setDayCount}
                            yearToggle={yearToggle}
                            monthToggle={monthToggle}
                            dayCount={dayCount}
                            onDayChange={setDay}
                            onMonthChange={setMonth}
                            onYearChange={setYear}
                            onYearToggle={setYearToggle}
                            onDayToggle={setDayToggle}
                            />
                            </div>
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