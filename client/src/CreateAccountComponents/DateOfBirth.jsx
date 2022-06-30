import './CreateAccount.css'
import DayDropDown from './DayComponents'
import YearDropDown from './YearComponent'
import MonthDropDown from './MonthComponent'

const DobWidget = () => {

    return (
        <>
            <div className='dob-button-container'>
                <MonthDropDown />
                <DayDropDown />
                <YearDropDown />
            </div>
        </>
    );
}

export default DobWidget;