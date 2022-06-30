import { useCallback } from "react";

const DayDropDown = (
    {
    month, onMonthChange, monthToggle, onMonthToggle,
    day, onDayChange, dayToggle, onDayToggle, dayCount,
    year, onYearChange, yearToggle, onYearToggle
}) => {

    const dayArray = []
    for (let i = 1; i < dayCount; i++){
        dayArray.push(i)
    }
    
    const handleDayToggle = useCallback((props) => {
        onDayToggle(props)
    }) 

    const handleDayChange = useCallback((props) => {
        onDayChange(props)
    })

    return (
        <>
            {!dayToggle ? (
                <div id='day' className='dob-button' onClick={e => {
                    e.preventDefault();
                    handleDayToggle(true);
                }}>
                    <span className='button-span'><p>{day}</p>\/</span>
                </div>
            ) : (
                <>
                    <div id='day' className='dob-button' onClick={e => {
                        e.preventDefault();
                            handleDayToggle(false);
                    }}>
                        <span className='button-span'><p>{day}</p>\/</span>
                    </div>
                    <span className='dd-span'>
                        <div className='dd-container'>
                                <p className='list-items' onClick={e => {
                                    e.preventDefault();
                                    handleDayToggle(false);
                                    handleDayChange(day);
                                }}>Day</p>
                            <ul>
                                {dayArray.map((days, id) => {
                                    return (
                                        <li className='list-items' key={id} onClick={e => { e.preventDefault(); handleDayChange(days); handleDayToggle(false) }}>
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

export default DayDropDown