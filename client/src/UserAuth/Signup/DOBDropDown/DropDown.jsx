import { useCallback } from "react";
import ShowList from "./ListItems";

const DropDown = ({ timePeriod, onSetTimePeriodValue, toggle, onToggle, timePeriodValue, onSetTypes}) => {

    const handleToggle = useCallback(() => {
            if (toggle[timePeriod]) onToggle(timePeriod, false)
        else onToggle(timePeriod, true)
    }) 
    const handleChange = useCallback((type, props) => {
        onSetTimePeriodValue(type, props)
        onSetTypes(type)
    })

    return (
        <>
            <div id='day' className='dob-button' onClick={e => {e.preventDefault(); handleToggle(timePeriod, true);}}>
                <span className='button-span'><p>{timePeriodValue[timePeriod]}</p>\/</span>
            </div>
            {toggle[timePeriod] ? (<ShowList timePeriod={timePeriod} onSetTimePeriodValue={handleChange} toggle={toggle} onToggle={onToggle} timePeriodValue={timePeriodValue} />):(<></>)}
        </>
    )
}

export default DropDown