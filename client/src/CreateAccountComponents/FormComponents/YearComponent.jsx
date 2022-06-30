import { useCallback } from "react";

const YearDropDown = ( {
    month, onMonthChange, monthToggle, onMonthToggle,
        day, onDayChange, dayToggle, onDayToggle,
    year, onYearChange, yearToggle, onYearToggle
}) => {

    let yearArray = [];
    for (let i = 1960; i <= 2022; i++) {
        yearArray.push(i);
    }

    const handleYearChange = useCallback((props) => {
        onYearChange(props);
    })
    
    const handleYearToggle = useCallback((props) => {
        onYearToggle(props)
    })

    return (
        <>
            {!yearToggle ? (
                <div id='year' className='dob-button' onClick={e => {
                    e.preventDefault();
                    handleYearToggle(true)
                }}>
                    <span className='button-span'><p>{year}</p>\/</span>
                </div>
            ) : (
                <>
                    <div id='year' className='dob-button' onClick={e => {
                            e.preventDefault();
                            handleYearToggle(false)
                    }}>
                        <span className='button-span'><p>{year}</p>\/</span>
                    </div>
                    <span className='dd-span'>
                        <div className='dd-container'>
                            <p className='list-items' onClick={e => { e.preventDefault(); handleYearChange(year); handleYearToggle(false) }}>{year}</p>
                            <ul>
                                {yearArray.map((years, id) => {
                                    return (
                                        <li className='list-items' key={id} onClick={e => { e.preventDefault(); handleYearChange(years); handleYearToggle(false) }}>
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

export default YearDropDown